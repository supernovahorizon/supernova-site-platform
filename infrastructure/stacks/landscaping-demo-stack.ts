import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { StaticBusinessWebsite } from '@supernova/deployment-aws';
import { Construct } from 'constructs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import { landscapingDemoConfig } from '../config/landscaping-demo.js';
import { sitesDelegatedZoneName } from '../config/environments.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

export class SupernovaLandscapingDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hostedZoneId = process.env.SITES_HOSTED_ZONE_ID;
    if (!hostedZoneId) {
      throw new Error(
        'SITES_HOSTED_ZONE_ID is required. Run bootstrap-sites-dns.yml and set the repository variable before deploying demos.',
      );
    }

    const hostedZone = route53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
      hostedZoneId,
      zoneName: sitesDelegatedZoneName,
    });

    new StaticBusinessWebsite(this, 'Website', {
      siteId: landscapingDemoConfig.siteId,
      domainName: landscapingDemoConfig.domainName,
      hostedZone,
      buildOutputPath: path.join(repoRoot, landscapingDemoConfig.buildOutputPath),
      enableSecurityHeaders: true,
      enableCompression: true,
      enableMonitoring: true,
      retainProductionData: true,
    });
  }
}
