# Supernova Site Platform infrastructure

AWS CDK applications for delegated demo DNS and landscaping demonstration websites.

## Stacks

| Stack                           | Command                   | Purpose                                        |
| ------------------------------- | ------------------------- | ---------------------------------------------- |
| `SupernovaWebDnsStack`          | `bootstrap-sites-dns.yml` | Route 53 zone for `sites.supernovahorizon.com` |
| `SupernovaLandscapingDemoStack` | `deploy-demos.yml`        | Evergreen Grove demo                           |
| `SupernovaBlueRidgeDemoStack`   | `deploy-demos.yml`        | Blue Ridge reuse-validation demo               |

## Local development (non-production)

```bash
pnpm install
pnpm --filter @supernova/demo-landscaping build
cd infrastructure
SITES_HOSTED_ZONE_ID=Z1234567890ABC DEPLOY_TARGET=landscaping pnpm exec cdk synth SupernovaLandscapingDemoStack
```

`cdk synth` and tests are allowed locally. **`cdk deploy` is not** — production deploys run only through GitHub Actions.

## IAM

- Trust policy: `policies/demo-deployment-trust-policy.json`
- Permissions: `policies/demo-deployment-permissions-policy.json`
- Role name: `SupernovaSitePlatformDemoDeploymentRole`
