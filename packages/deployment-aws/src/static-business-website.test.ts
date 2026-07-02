import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { describe, expect, it } from 'vitest';

import { StaticBusinessWebsite } from './static-business-website.js';
import { buildStaticSiteRoutingFunctionCode } from './static-site-routing.js';

describe('StaticBusinessWebsite', () => {
  const hostedZone = route53.HostedZone.fromHostedZoneAttributes(
    new Stack(new App(), 'ZoneStack'),
    'Zone',
    {
      hostedZoneId: 'Z1234567890ABC',
      zoneName: 'sites.supernovahorizon.com',
    },
  );

  it('synthesizes private S3, OAC CloudFront, ACM, and Route53 aliases', () => {
    const app = new App();
    const stack = new Stack(app, 'TestStack', {
      env: { account: '111111111111', region: 'us-east-1' },
    });

    new StaticBusinessWebsite(stack, 'Site', {
      siteId: 'demo-landscaping',
      domainName: 'landscaping.sites.supernovahorizon.com',
      hostedZone,
      buildOutputPath: './fixtures/dist',
      enableSecurityHeaders: true,
      enableMonitoring: true,
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });

    template.hasResourceProperties('AWS::CloudFront::Distribution', {
      DistributionConfig: Match.objectLike({
        DefaultRootObject: 'index.html',
        CustomErrorResponses: Match.arrayWith([
          Match.objectLike({ ErrorCode: 404, ResponseCode: 404 }),
        ]),
      }),
    });

    template.resourceCountIs('AWS::Route53::RecordSet', 2);
    template.hasResourceProperties('AWS::CertificateManager::Certificate', {
      DomainName: 'landscaping.sites.supernovahorizon.com',
    });
  });

  it('rejects invalid domain names', () => {
    const app = new App();
    const stack = new Stack(app, 'InvalidStack', {
      env: { account: '111111111111', region: 'us-east-1' },
    });

    expect(
      () =>
        new StaticBusinessWebsite(stack, 'Site', {
          siteId: 'bad',
          domainName: 'invalid',
          hostedZone,
          buildOutputPath: './fixtures/dist',
        }),
    ).toThrow(/Invalid domainName/);
  });
});

describe('buildStaticSiteRoutingFunctionCode', () => {
  it('maps directory paths to index.html', () => {
    const code = buildStaticSiteRoutingFunctionCode();
    expect(code).toContain("uri + 'index.html'");
    expect(code).toContain("uri + '/index.html'");
  });
});
