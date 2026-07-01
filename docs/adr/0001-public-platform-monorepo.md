# ADR 0001: Public platform monorepo

## Status

Accepted

## Context

Supernova needs a reusable website platform with shared packages, demos, and contributor documentation.

## Decision

Use a single public monorepo for the platform engine, vertical packages, and demonstration applications.

## Consequences

- Agents and contributors can see contracts and consumers together.
- Package boundaries and CODEOWNERS become essential guardrails.
- Real client content remains in private repositories.

## Alternatives considered

- Separate repositories per vertical: rejected due to higher coordination cost during groundwork.
