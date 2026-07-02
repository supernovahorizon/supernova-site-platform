# @supernova/deployment-aws

Reusable AWS CDK constructs for Supernova static business websites.

## Public API

```ts
import { StaticBusinessWebsite } from '@supernova/deployment-aws';
```

`StaticBusinessWebsite` provisions:

- Private encrypted S3 content bucket (block public access)
- CloudFront distribution with Origin Access Control
- ACM certificate with Route 53 DNS validation
- Route 53 A/AAAA alias records
- Astro-friendly directory routing via CloudFront Function
- Security response headers, compression, and optional CloudWatch alarms
- S3 deployment with CloudFront invalidation

Production deploys consume this package through GitHub Actions workflows in `infrastructure/`. Do not run `cdk deploy` from a developer laptop for production.
