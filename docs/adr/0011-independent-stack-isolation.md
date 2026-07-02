# ADR 0011: Independent stack isolation for each website

## Status

Accepted

## Context

Demonstration sites and client sites must deploy, roll back, and retire independently.

## Decision

Each website receives its own CloudFormation stack, S3 content bucket, CloudFront distribution, and ACM certificate. Shared infrastructure is limited to the delegated DNS zone stack.

## Consequences

- Higher resource count than a multi-tenant bucket model.
- Path-filtered workflows can deploy one demo without touching the other.
- Stack names follow `Supernova{Site}DemoStack` conventions.

## Alternatives considered

- Single stack with multiple behaviors: rejected; couples lifecycle and blast radius.
