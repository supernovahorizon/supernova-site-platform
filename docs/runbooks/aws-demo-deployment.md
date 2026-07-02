# AWS demo deployment runbook

## Prerequisites

GitHub repository: `supernovahorizon/supernova-site-platform`

| Name                       | Type        | Value                                         |
| -------------------------- | ----------- | --------------------------------------------- |
| `production-demos`         | Environment | Required for deploy workflows                 |
| `AWS_DEMO_DEPLOY_ROLE_ARN` | Secret      | `SupernovaSitePlatformDemoDeploymentRole` ARN |
| `AWS_DEPLOYMENT_REGION`    | Variable    | `us-east-1`                                   |
| `SITES_HOSTED_ZONE_ID`     | Variable    | Set after DNS bootstrap                       |
| `CLOUDFLARE_ZONE_ID`       | Variable    | Cloudflare zone ID for `supernovahorizon.com` |
| `CLOUDFLARE_DNS_API_TOKEN` | Secret      | DNS Edit + Zone Read on root zone only        |

Cloudflare token permissions: Zone → DNS → Edit, Zone → Zone → Read. Restrict to `supernovahorizon.com`.

## One-time DNS bootstrap

1. Open Actions → **Bootstrap sites DNS delegation** → Run workflow.
2. Confirm workflow summary lists hosted zone ID and name servers.
3. Set repository variable `SITES_HOSTED_ZONE_ID` from stack output.
4. Verify: `dig NS sites.supernovahorizon.com @1.1.1.1`

Do not run bootstrap from a developer laptop.

## Routine demo deployment

Triggered by push to `main` when relevant paths change, or manually via **Deploy demo websites**.

Quality gates in workflow:

- format, lint, typecheck, test
- per-demo Astro build
- infrastructure tests
- CDK synth and deploy
- smoke tests

## Smoke test expectations

- `/` returns HTTP 200 with demonstration content
- `/robots.txt` and `/sitemap.xml` reachable
- `/services/` returns 200 (directory route)
- unknown path returns 404
- Evergreen Grove: `index,follow`; Blue Ridge: `noindex`

## Rollback

1. Revert the offending commit on `main`.
2. Wait for path-filtered deploy workflow to complete.
3. If AWS is unavailable, temporary Cloudflare Pages projects remain documented in ops inventory.

## Never use in production

- `cdk deploy` from a laptop
- `wrangler pages deploy`
- Manual S3 uploads or CloudFront invalidations
