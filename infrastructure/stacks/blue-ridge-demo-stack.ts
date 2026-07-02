import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { StaticBusinessWebsite } from '@supernova/deployment-aws';
import { Construct } from 'constructs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import { blueRidgeDemoConfig } from '../config/blue-ridge-demo.js';
import { sitesDelegatedZoneName } from '../config/environments.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

export class SupernovaBlueRidgeDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hostedZoneId = process.env.SITES_HOSTED_ZONE_ID;
    const hostedZone = hostedZoneId
      ? route53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
          hostedZoneId,
          zoneName: sitesDelegatedZoneName,
        })
      : route53.HostedZone.fromLookup(this, 'HostedZone', {
          domainName: sitesDelegatedZoneName,
        });

    new StaticBusinessWebsite(this, 'Website', {
      siteId: blueRidgeDemoConfig.siteId,
      domainName: blueRidgeDemoConfig.domainName,
      hostedZone,
      buildOutputPath: path.join(repoRoot, blueRidgeDemoConfig.buildOutputPath),
      enableSecurityHeaders: true,
      enableCompression: true,
      enableMonitoring: true,
      retainProductionData: true,
    });
  }
}
