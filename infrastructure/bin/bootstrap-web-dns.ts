#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

import { deploymentEnvironment } from '../config/environments.js';
import { SupernovaWebDnsStack } from '../stacks/web-dns-stack.js';

const app = new cdk.App();

new SupernovaWebDnsStack(app, 'SupernovaWebDnsStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: deploymentEnvironment.awsRegion,
  },
  description: 'Route 53 hosted zone for sites.supernovahorizon.com',
});
