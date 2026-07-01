# ADR 0005: AI agent guardrails

## Status

Accepted

## Context

Agents will initialize repositories, implement features, and open pull requests with limited human supervision.

## Decision

Version agent rules in `AGENTS.md`, require quality checks before pushing to `main`, and forbid destructive infrastructure or visibility changes without approval.

## Consequences

- Safer automation with explicit stop conditions.
- Pull requests remain available when collaboration requires review.

## Alternatives considered

- Unrestricted agent write access: rejected due to repository and infrastructure risk.
