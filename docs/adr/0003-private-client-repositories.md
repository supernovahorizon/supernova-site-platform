# ADR 0003: Private client repositories

## Status

Accepted

## Context

Client content, credentials, and licensed assets must not live in the public monorepo.

## Decision

Generate each client site from a private template repository that depends on published platform packages.

## Consequences

- Clear isolation for domains, analytics IDs, and lead data.
- Package versioning and upgrade workflows become first-class concerns.

## Alternatives considered

- Client folders inside the monorepo: rejected due to leakage risk.
