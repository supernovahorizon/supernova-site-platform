# Supernova Site Platform

Open-source, schema-driven website platform and demonstration sites for small businesses.

## Status

Landscaping golden path milestone. The platform can generate multi-page fictional landscaping demonstration sites from validated structured content, shared sections, and a minimal `create-site` CLI. Package publication and production deployment are intentionally deferred.

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

- `apps/demo-landscaping` — Evergreen Grove Landscaping (16 pages)
- `apps/demo-landscaping-blue-ridge` — Blue Ridge Outdoor Living (reuse proof)
- `apps/demo-fashion` — fictional fashion and jewelry studio (groundwork stub)

Landscaping demos are clearly marked as demonstrations and must not present fake testimonials, ratings, or revenue claims.

## Landscaping quick start

```bash
pnpm --filter @supernova/demo-landscaping dev
pnpm supernova create-site --name "Example Co" --slug example-co --vertical landscaping --dry-run
```

See `docs/tutorials/landscaping-golden-path.md`.

## License

Apache-2.0 for the public platform code. Supernova Horizon names and logos are governed separately; see `TRADEMARKS.md`.
