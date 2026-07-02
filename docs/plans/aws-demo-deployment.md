# AWS demo deployment plan

## Current state

- `supernovahorizon.com` deploys through GitHub Actions → OIDC → AWS CDK → private S3 → CloudFront. That pipeline is unchanged.
- Landscaping demos build successfully in `apps/demo-landscaping` and `apps/demo-landscaping-blue-ridge`.
- Temporary Cloudflare Pages projects (`supernova-demo-landscaping`, `supernova-demo-blue-ridge`) exist as rollback targets only. They must not be deleted until AWS deployment is verified.
- `packages/deployment-aws` now provides a reusable `StaticBusinessWebsite` construct.
- `infrastructure/` hosts CDK apps for delegated DNS and per-demo stacks.
- GitHub workflows `bootstrap-sites-dns.yml` and `deploy-demos.yml` deploy exclusively through GitHub Actions OIDC.

## Target architecture

```text
Developer laptop (dev/test/synth only)
  -> push to main
  -> GitHub Actions quality checks
  -> GitHub OIDC assumes SupernovaSitePlatformDemoDeploymentRole
  -> build Astro dist
  -> CDK synth + deploy
  -> CloudFront invalidation
  -> smoke tests

Cloudflare DNS (authoritative for supernovahorizon.com)
  └── NS delegation: sites.supernovahorizon.com
        └── Route 53 hosted zone (SupernovaWebDnsStack)
              ├── landscaping.sites.supernovahorizon.com
              └── blue-ridge.sites.supernovahorizon.com

Per site (independent stack):
  Route 53 alias -> CloudFront (OAC) -> private S3 bucket
```

## CDK construct API

`StaticBusinessWebsite` (`@supernova/deployment-aws`) accepts:

| Property                                          | Purpose                                                  |
| ------------------------------------------------- | -------------------------------------------------------- |
| `siteId`                                          | Stable site identifier and tag value                     |
| `domainName`                                      | Primary custom domain                                    |
| `hostedZone`                                      | Route 53 zone for ACM validation and aliases             |
| `buildOutputPath`                                 | Astro `dist` directory deployed in the same workflow run |
| `indexDocument` / `errorDocument`                 | Default `index.html` / `404.html`                        |
| `enableSecurityHeaders`                           | CloudFront response headers policy                       |
| `enableCompression`                               | Gzip/Brotli at edge                                      |
| `enableMonitoring`                                | CloudWatch 4xx/5xx alarms                                |
| `enableAccessLogs`                                | Optional CloudFront access logs                          |
| `priceClass`                                      | CloudFront price class                                   |
| `aliases`                                         | Optional SANs                                            |
| `tags` / `removalPolicy` / `retainProductionData` | Lifecycle and tagging                                    |

Creates: private encrypted S3 bucket, OAC CloudFront distribution, ACM DNS-validated certificate, Route 53 A/AAAA aliases, BucketDeployment with invalidation, optional alarms, CloudFormation outputs.

## Stack boundaries

| Stack                           | Scope                                               |
| ------------------------------- | --------------------------------------------------- |
| `SupernovaWebDnsStack`          | Route 53 zone for `sites.supernovahorizon.com` only |
| `SupernovaLandscapingDemoStack` | `landscaping.sites.supernovahorizon.com`            |
| `SupernovaBlueRidgeDemoStack`   | `blue-ridge.sites.supernovahorizon.com`             |

Each website has its own S3 bucket, CloudFront distribution, ACM certificate, and CloudFormation stack.

## DNS delegation design

1. `bootstrap-sites-dns.yml` deploys `SupernovaWebDnsStack` through OIDC.
2. Workflow reads `NameServers` and `HostedZoneId` outputs.
3. Workflow calls Cloudflare API with `CLOUDFLARE_DNS_API_TOKEN` to create NS records for `sites.supernovahorizon.com`.
4. Script fails on conflicting non-NS records and verifies delegation propagation.
5. `SITES_HOSTED_ZONE_ID` GitHub variable is set from stack output before demo deploys.

Root `supernovahorizon.com` and `www` records are never modified.

## IAM / OIDC design

- OIDC provider: `token.actions.githubusercontent.com` (existing)
- Role: `SupernovaSitePlatformDemoDeploymentRole`
- Trust: `repo:supernovahorizon/supernova-site-platform:environment:production-demos`
- Permissions: scoped policy in `infrastructure/policies/demo-deployment-permissions-policy.json`
- GitHub secret: `AWS_DEMO_DEPLOY_ROLE_ARN`
- GitHub environment: `production-demos`

## GitHub Actions workflows

| Workflow                  | Trigger                                               | Purpose                                 |
| ------------------------- | ----------------------------------------------------- | --------------------------------------- |
| `bootstrap-sites-dns.yml` | `workflow_dispatch`                                   | One-time delegated zone + Cloudflare NS |
| `deploy-demos.yml`        | `push` to `main` (path-filtered), `workflow_dispatch` | Build, deploy, smoke-test demos         |

Path filters deploy only affected demos unless shared `packages/**`, `infrastructure/**`, or lockfiles change.

## Build commands

```bash
pnpm install --frozen-lockfile
pnpm --filter @supernova/demo-landscaping build
pnpm --filter @supernova/demo-landscaping-blue-ridge build
cd infrastructure && pnpm exec cdk deploy SupernovaLandscapingDemoStack --require-approval never
```

Build artifacts: `apps/demo-landscaping/dist`, `apps/demo-landscaping-blue-ridge/dist`. Never committed.

## Deployment ordering

1. Configure GitHub environment, OIDC role, and repository variables/secrets.
2. Run `bootstrap-sites-dns.yml` manually.
3. Set `SITES_HOSTED_ZONE_ID` repository variable.
4. Push to `main` or run `deploy-demos.yml`.

## Rollback

- Revert commit on `main`; path-filtered workflow redeploys previous artifact.
- Cloudflare Pages projects remain available until AWS paths are verified.
- Production data retained via `retainProductionData: true` on demo stacks.

## Cost considerations

- Two CloudFront distributions and two private S3 buckets.
- Route 53 hosted zone monthly charge for `sites.supernovahorizon.com`.
- ACM certificates are free for CloudFront.
- CloudWatch alarms are low cost at demo traffic levels.

## Security controls

- No public S3 website hosting.
- CloudFront OAC is the only public read path.
- No long-lived AWS access keys in GitHub.
- Cloudflare API token scoped to DNS edit on `supernovahorizon.com`.
- Security response headers enabled on demo distributions.

## Monitoring

- CloudWatch 4xx and 5xx rate alarms per demo distribution.
- GitHub Actions workflow summaries record deployed URLs and stack outputs.
- Post-deploy smoke tests validate HTTP 200, robots, sitemap, directory routes, and 404 behavior.

## Indexing behavior

| Site            | Domain                                   | Indexing                   |
| --------------- | ---------------------------------------- | -------------------------- |
| Evergreen Grove | `landscaping.sites.supernovahorizon.com` | indexable (`index,follow`) |
| Blue Ridge      | `blue-ridge.sites.supernovahorizon.com`  | `noindex`                  |

## Migration from temporary Cloudflare Pages

1. Complete AWS deployment and smoke tests.
2. Update documentation and ops inventory.
3. Retire Pages custom domains (never added for these demos).
4. Delete Pages projects only after documented acceptance and explicit approval.

## Acceptance criteria

- [ ] Delegated Route 53 zone exists
- [ ] Cloudflare NS delegation performed via GitHub Actions
- [ ] Both demos deployed via GitHub Actions + CDK
- [ ] Private S3 + CloudFront OAC for each site
- [ ] Valid TLS on both custom domains
- [ ] Independent stacks and resources
- [ ] Push to `main` deploys relevant changes
- [ ] Smoke tests pass
- [ ] Main demo indexable; Blue Ridge noindex
- [ ] Company website unchanged
- [ ] Client template includes AWS skeleton
- [ ] No secrets committed or printed

## Explicit non-goals

- Local `cdk deploy` or `wrangler pages deploy` for production
- Moving root DNS away from Cloudflare
- Modifying `supernovahorizon.com` deployment pipeline
- Shared bucket or distribution across sites
- Deleting Cloudflare Pages projects in this milestone
- Fashion demo deployment
- npm package publishing
- CMS, billing, or control plane
