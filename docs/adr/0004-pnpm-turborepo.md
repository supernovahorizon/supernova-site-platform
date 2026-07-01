# ADR 0004: pnpm and Turborepo

## Status

Accepted

## Context

The platform requires reproducible installs, workspace linking, and cached task execution across many packages.

## Decision

Use pnpm workspaces with Turborepo for build, lint, typecheck, and test orchestration.

## Consequences

- Deterministic dependency graphs and efficient CI caching.
- Each package must expose explicit scripts consumed by Turborepo.

## Alternatives considered

- npm workspaces only: rejected due to weaker workspace ergonomics for large graphs.
