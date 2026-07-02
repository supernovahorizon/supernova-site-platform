# ADR 0007: GitHub Actions as the only production deployment executor

## Status

Accepted

## Context

Production deployments must be reproducible, reviewable, and independent of individual developer machines. Local Wrangler and CDK deploy commands were used temporarily during bootstrap.

## Decision

All routine production website deployments run exclusively through GitHub Actions workflows on `supernovahorizon/supernova-site-platform` (and equivalent client repository workflows). Developer laptops may run builds, tests, and `cdk synth` only.

## Consequences

- Every production deploy is tied to a commit and workflow run.
- GitHub Environments gate demo production deploys.
- Secrets and variables live in GitHub, not in repositories.
- Onboarding requires configuring workflows before first deploy.

## Alternatives considered

- Local deploy with shared credentials: rejected; violates least privilege and audit requirements.
