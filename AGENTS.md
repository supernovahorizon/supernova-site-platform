# Agent Rules

1. Never commit secrets, client lead data, production account IDs, or private client assets.
2. Never push directly to `main`.
3. Do not change repository visibility, licenses, billing, DNS, IAM, or production infrastructure without explicit approval.
4. Respect package boundaries and public exports.
5. Shared behavior belongs in packages; demo content belongs in apps.
6. Vertical packages must not import each other.
7. Every behavior change requires tests and documentation.
8. Run lint, typecheck, tests, audits, and affected builds before completing a task.
9. Do not update visual baselines merely to make tests pass.
10. Stop and report when a requested action is destructive or requires unavailable credentials.

## Package-level guidance

- `@supernova/content-schema` and `@supernova/site-config` own validation contracts.
- `@supernova/ui-primitives` must remain vertical-agnostic.
- Demo apps must use fictional businesses and clearly label demonstration content.
