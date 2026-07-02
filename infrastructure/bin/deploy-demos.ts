#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

import { deploymentEnvironment } from '../config/environments.js';
import { SupernovaBlueRidgeDemoStack } from '../stacks/blue-ridge-demo-stack.js';
import { SupernovaLandscapingDemoStack } from '../stacks/landscaping-demo-stack.js';

const app = new cdk.App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: deploymentEnvironment.awsRegion,
};

const deployTarget = process.env.DEPLOY_TARGET ?? 'all';

if (deployTarget === 'all' || deployTarget === 'landscaping') {
  new SupernovaLandscapingDemoStack(app, 'SupernovaLandscapingDemoStack', {
    env,
    description: 'Evergreen Grove landscaping demonstration website',
  });
}

if (deployTarget === 'all' || deployTarget === 'blue-ridge') {
  new SupernovaBlueRidgeDemoStack(app, 'SupernovaBlueRidgeDemoStack', {
    env,
    description: 'Blue Ridge landscaping reuse-validation demonstration website',
  });
}
