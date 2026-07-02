# ADR 0006: AWS CDK as the standard website deployment platform

## Status

Accepted

## Context

Supernova needs a repeatable, auditable way to host company, demonstration, and future client static websites. A temporary Cloudflare Pages upload path existed for demos but does not meet production standards for infrastructure-as-code, independent lifecycle, or client replication.

## Decision

Use AWS CDK as the standard deployment platform for all Supernova-hosted static business websites. The reusable `StaticBusinessWebsite` construct in `@supernova/deployment-aws` is the canonical implementation.

## Consequences

- Infrastructure is versioned beside application code.
- Each site can have independent stacks, buckets, and distributions.
- Client repositories can copy or consume the same construct pattern.
- CDK bootstrap and IAM policies must be maintained per AWS account.

## Alternatives considered

- Cloudflare Pages as permanent hosting: rejected; lacks the shared CDK model used by the company site and client factory goals.
- Manual S3 uploads: rejected; no audit trail and error-prone invalidations.
