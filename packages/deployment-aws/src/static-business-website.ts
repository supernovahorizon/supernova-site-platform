import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

import { buildStaticSiteRoutingFunctionCode } from './static-site-routing.js';

export interface StaticBusinessWebsiteProps {
  siteId: string;
  domainName: string;
  hostedZone: route53.IHostedZone;
  buildOutputPath: string;
  indexDocument?: string;
  errorDocument?: string;
  enableAccessLogs?: boolean;
  enableMonitoring?: boolean;
  enableSecurityHeaders?: boolean;
  enableCompression?: boolean;
  priceClass?: cloudfront.PriceClass;
  tags?: Record<string, string>;
  removalPolicy?: cdk.RemovalPolicy;
  retainProductionData?: boolean;
  aliases?: string[];
}

export class StaticBusinessWebsite extends Construct {
  public readonly contentBucket: s3.Bucket;
  public readonly distribution: cloudfront.Distribution;
  public readonly certificate: acm.Certificate;

  constructor(scope: Construct, id: string, props: StaticBusinessWebsiteProps) {
    super(scope, id);

    if (!props.domainName.includes('.')) {
      throw new Error(`Invalid domainName: ${props.domainName}`);
    }

    if (!props.buildOutputPath.trim()) {
      throw new Error('buildOutputPath is required');
    }

    const indexDocument = props.indexDocument ?? 'index.html';
    const errorDocument = props.errorDocument ?? '404.html';
    const removalPolicy =
      props.removalPolicy ??
      (props.retainProductionData ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY);

    const baseTags: Record<string, string> = {
      Project: 'SupernovaSitePlatform',
      ManagedBy: 'AWS-CDK',
      Repository: 'supernovahorizon/supernova-site-platform',
      Environment: 'production',
      Site: props.siteId,
      Owner: 'SupernovaHorizon',
      ...props.tags,
    };

    for (const [key, value] of Object.entries(baseTags)) {
      cdk.Tags.of(this).add(key, value);
    }

    this.contentBucket = new s3.Bucket(this, 'ContentBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: props.retainProductionData ?? false,
      removalPolicy,
      autoDeleteObjects: removalPolicy === cdk.RemovalPolicy.DESTROY,
    });

    this.certificate = new acm.Certificate(this, 'Certificate', {
      domainName: props.domainName,
      subjectAlternativeNames: props.aliases ?? [],
      validation: acm.CertificateValidation.fromDns(props.hostedZone),
    });

    const routingFunction = new cloudfront.Function(this, 'RoutingFunction', {
      functionName: `SupernovaStaticRouting-${props.siteId}`.slice(0, 64),
      code: cloudfront.FunctionCode.fromInline(buildStaticSiteRoutingFunctionCode()),
    });

    const responseHeadersPolicy = props.enableSecurityHeaders
      ? new cloudfront.ResponseHeadersPolicy(this, 'SecurityHeaders', {
          securityHeadersBehavior: {
            contentTypeOptions: { override: true },
            frameOptions: {
              frameOption: cloudfront.HeadersFrameOption.DENY,
              override: true,
            },
            referrerPolicy: {
              referrerPolicy: cloudfront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
              override: true,
            },
            strictTransportSecurity: {
              accessControlMaxAge: cdk.Duration.days(365),
              includeSubdomains: true,
              preload: true,
              override: true,
            },
            xssProtection: { protection: true, modeBlock: true, override: true },
          },
        })
      : undefined;

    const defaultBehavior: cloudfront.BehaviorOptions = {
      origin: origins.S3BucketOrigin.withOriginAccessControl(this.contentBucket),
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      compress: props.enableCompression ?? true,
      cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      responseHeadersPolicy,
      functionAssociations: [
        {
          function: routingFunction,
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
        },
      ],
    };

    this.distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultRootObject: indexDocument,
      domainNames: [props.domainName, ...(props.aliases ?? [])],
      certificate: this.certificate,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      priceClass: props.priceClass ?? cloudfront.PriceClass.PRICE_CLASS_100,
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: `/${errorDocument}`,
          ttl: cdk.Duration.minutes(5),
        },
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: `/${errorDocument}`,
          ttl: cdk.Duration.minutes(5),
        },
      ],
      defaultBehavior,
      enableLogging: props.enableAccessLogs ?? false,
    });

    const recordName = props.domainName.endsWith(`.${props.hostedZone.zoneName}`)
      ? props.domainName.slice(0, -(props.hostedZone.zoneName.length + 1))
      : props.domainName;

    new route53.ARecord(this, 'AliasV4', {
      zone: props.hostedZone,
      recordName,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(this.distribution)),
    });

    new route53.AaaaRecord(this, 'AliasV6', {
      zone: props.hostedZone,
      recordName,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(this.distribution)),
    });

    new s3deploy.BucketDeployment(this, 'DeployContent', {
      sources: [s3deploy.Source.asset(props.buildOutputPath)],
      destinationBucket: this.contentBucket,
      distribution: this.distribution,
      distributionPaths: ['/*'],
      prune: true,
    });

    if (props.enableMonitoring) {
      new cloudwatch.Alarm(this, 'ErrorRate4xx', {
        metric: this.distribution.metric4xxErrorRate(),
        threshold: 5,
        evaluationPeriods: 2,
        alarmDescription: `${props.siteId} CloudFront 4xx error rate`,
      });

      new cloudwatch.Alarm(this, 'ErrorRate5xx', {
        metric: this.distribution.metric5xxErrorRate(),
        threshold: 1,
        evaluationPeriods: 2,
        alarmDescription: `${props.siteId} CloudFront 5xx error rate`,
      });
    }

    new cdk.CfnOutput(this, 'SiteUrl', { value: `https://${props.domainName}` });
    new cdk.CfnOutput(this, 'DistributionId', {
      value: this.distribution.distributionId,
    });
    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: this.distribution.distributionDomainName,
    });
    new cdk.CfnOutput(this, 'ContentBucketName', {
      value: this.contentBucket.bucketName,
    });
  }
}
