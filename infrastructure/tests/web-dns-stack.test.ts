import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { describe, it } from 'vitest';

import { SupernovaWebDnsStack } from '../stacks/web-dns-stack.js';

describe('SupernovaWebDnsStack', () => {
  it('creates a delegated hosted zone', () => {
    const app = new App();
    const stack = new SupernovaWebDnsStack(app, 'DnsTest', {
      env: { account: '111111111111', region: 'us-east-1' },
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Route53::HostedZone', {
      Name: 'sites.supernovahorizon.com.',
    });
  });
});
