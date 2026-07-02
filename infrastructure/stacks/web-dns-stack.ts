import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

import { sitesDelegatedZoneName } from '../config/environments.js';

export class SupernovaWebDnsStack extends cdk.Stack {
  public readonly hostedZone: route53.HostedZone;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.hostedZone = new route53.HostedZone(this, 'SitesHostedZone', {
      zoneName: sitesDelegatedZoneName,
      comment: 'Delegated demo and client website DNS for Supernova Site Platform',
    });

    cdk.Tags.of(this).add('Project', 'SupernovaSitePlatform');
    cdk.Tags.of(this).add('ManagedBy', 'AWS-CDK');
    cdk.Tags.of(this).add('Repository', 'supernovahorizon/supernova-site-platform');
    cdk.Tags.of(this).add('Environment', 'production');
    cdk.Tags.of(this).add('Owner', 'SupernovaHorizon');

    new cdk.CfnOutput(this, 'HostedZoneId', {
      value: this.hostedZone.hostedZoneId,
      exportName: 'SupernovaSitesHostedZoneId',
    });

    new cdk.CfnOutput(this, 'HostedZoneName', {
      value: this.hostedZone.zoneName,
    });

    new cdk.CfnOutput(this, 'NameServers', {
      value: cdk.Fn.join(',', this.hostedZone.hostedZoneNameServers ?? []),
      description: 'Route 53 name servers for Cloudflare NS delegation',
    });
  }
}
