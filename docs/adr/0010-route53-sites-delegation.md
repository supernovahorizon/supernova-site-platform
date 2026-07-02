# ADR 0010: Route 53 delegation for sites.supernovahorizon.com

## Status

Accepted

## Context

Demo and future client preview sites need DNS names under Supernova control without migrating the authoritative root zone away from Cloudflare.

## Decision

Cloudflare remains authoritative for `supernovahorizon.com`. AWS Route 53 hosts `sites.supernovahorizon.com` via NS delegation created by the `bootstrap-sites-dns.yml` workflow. Demo domains live under this delegated zone.

## Consequences

- One-time Cloudflare API token is required for NS record creation.
- ACM certificates validate through Route 53 in the delegated zone.
- Root and `www` records are out of scope for platform automation.

## Alternatives considered

- CNAME per demo under root zone: rejected; does not scale cleanly for many client previews and mixes demo DNS with production apex records.
