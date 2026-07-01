# ADR 0002: Astro static-first

## Status

Accepted

## Context

Client sites are primarily content-driven and should minimize runtime infrastructure.

## Decision

Use Astro for demonstration and client-facing site applications, adding React islands only when interactivity is required.

## Consequences

- Builds produce static assets suitable for S3 and CloudFront.
- Business schemas remain framework-agnostic TypeScript.

## Alternatives considered

- Next.js everywhere: rejected for higher default client JavaScript on content pages.
