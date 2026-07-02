# ADR 0012: Cloudflare Pages deployments as temporary migration artifacts

## Status

Accepted

## Context

Landscaping demos were uploaded to Cloudflare Pages projects during an auth-available bootstrap window. That path bypassed GitHub Actions and is not the long-term standard.

## Decision

Existing Cloudflare Pages projects remain as temporary rollback targets until AWS deployment is verified. No new production deploys use Wrangler or Pages. Projects are retired only after documented acceptance.

## Consequences

- Ops inventory documents both AWS and Pages state during migration.
- `wrangler.toml` files in demo apps are deprecated, not deleted, until Pages retirement.
- Custom domains on Pages were never wired; AWS domains use the `sites.` namespace.

## Alternatives considered

- Immediate Pages deletion: rejected; removes rollback option before AWS verification.
