# Contributing

Thank you for helping improve the Supernova Site Platform.

## Groundwork expectations

- Run quality checks locally, then push directly to `main` unless a task explicitly requires a pull request.
- Keep demonstration content fictional and clearly labeled.
- Add or update tests for behavior changes.
- Run `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build` before requesting review.

## Package boundaries

Place reusable logic in `packages/`, vertical behavior in `packages/vertical-*`, and demo-only content in `apps/`.
