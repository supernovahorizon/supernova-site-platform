# ADR 0008: GitHub OIDC instead of long-lived AWS credentials

## Status

Accepted

## Context

Long-lived AWS access keys in GitHub secrets increase breach impact and rotation burden. The company website already uses GitHub OIDC to assume an IAM role.

## Decision

Platform demo deployments authenticate with `aws-actions/configure-aws-credentials` using OIDC and `SupernovaSitePlatformDemoDeploymentRole`. No AWS access key secrets are stored in GitHub.

## Consequences

- Trust policies must list exact repository and environment subjects.
- Role permissions are maintained as infrastructure policy documents in the repository.
- Workflows require `permissions: id-token: write`.

## Alternatives considered

- Repository AWS access keys: rejected.
