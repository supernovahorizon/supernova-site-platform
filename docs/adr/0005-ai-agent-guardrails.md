# ADR 0005: AI agent guardrails

## Status

Accepted

## Context

Agents will initialize repositories, implement features, and open pull requests with limited human supervision.

## Decision

Version agent rules in `AGENTS.md`, require branch-based workflows, and forbid destructive infrastructure or visibility changes without approval.

## Consequences

- Safer automation with explicit stop conditions.
- More documentation overhead for task contracts.

## Alternatives considered

- Unrestricted agent write access: rejected due to repository and infrastructure risk.
