# AWS demo rollback runbook

## Application rollback

1. Identify the last known-good commit on `main`.
2. `git revert` or restore content through a normal commit (no force-push).
3. Push to `main`; `deploy-demos.yml` rebuilds and redeploys affected demos.

## Infrastructure rollback

1. If a CDK change caused the issue, revert the infrastructure commit.
2. Re-run the deploy workflow for the affected `DEPLOY_TARGET`.
3. CloudFormation rolls forward to the previous template on redeploy.

## DNS rollback

- Do not remove Cloudflare NS delegation without a documented reason.
- If delegation must be removed, delete only the `sites.supernovahorizon.com` NS records via Cloudflare API or dashboard.

## Temporary Cloudflare Pages fallback

Until Pages projects are retired:

| Demo            | Pages URL                              |
| --------------- | -------------------------------------- |
| Evergreen Grove | `supernova-demo-landscaping.pages.dev` |
| Blue Ridge      | `supernova-demo-blue-ridge.pages.dev`  |

Pages are not production targets after AWS verification. Do not delete Pages projects until AWS paths are accepted.
