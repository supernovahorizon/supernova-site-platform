# Supernova Site Platform

Open-source, schema-driven website platform and demonstration sites for small businesses.

## Status

Groundwork foundation. This repository establishes the monorepo, shared packages, fictional demonstration sites, and CI quality gates. Package publication and production deployment are intentionally deferred.

## Repositories

- Platform (this repo): `supernovahorizon/supernova-site-platform`
- Client template: `supernovahorizon/supernova-client-site-template` (private)
- Operations: `supernovahorizon/supernova-site-ops` (private)

## Quick start

```bash
corepack enable
pnpm install
pnpm build
pnpm test
pnpm dev
```

## Demonstration apps

- `apps/demo-landscaping` — fictional landscaping business
- `apps/demo-fashion` — fictional fashion and jewelry studio

Both apps are clearly marked as demonstrations and must not present fake testimonials, ratings, or revenue claims.

## License

Apache-2.0 for the public platform code. Supernova Horizon names and logos are governed separately; see `TRADEMARKS.md`.
