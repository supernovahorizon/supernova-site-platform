# ADR 0009: Private S3 origins behind CloudFront Origin Access Control

## Status

Accepted

## Context

Public S3 website endpoints expose origins directly and complicate TLS, caching, and security header policies.

## Decision

All Supernova static sites use private S3 buckets with block public access enabled. CloudFront Origin Access Control (OAC) is the only authorized read path. `StaticBusinessWebsite` implements this pattern.

## Consequences

- Bucket policies reference the CloudFront distribution ARN.
- Astro directory routes are handled by a CloudFront Function viewer-request handler.
- 404 responses serve `404.html` with HTTP 404, not a soft redirect to the home page.

## Alternatives considered

- Public S3 static website hosting: rejected.
- Legacy Origin Access Identity without OAC: rejected; OAC is the current AWS recommendation.
