# Cloudflare Pages retirement plan

## Current temporary projects

| Project                      | Purpose                   | Status                  |
| ---------------------------- | ------------------------- | ----------------------- |
| `supernova-demo-landscaping` | Evergreen Grove bootstrap | Keep until AWS verified |
| `supernova-demo-blue-ridge`  | Blue Ridge bootstrap      | Keep until AWS verified |

Custom domains on Pages were never wired to production DNS.

## Retirement steps

1. Confirm AWS demos pass smoke tests on:
   - `https://landscaping.sites.supernovahorizon.com`
   - `https://blue-ridge.sites.supernovahorizon.com`
2. Update ops inventory to mark Pages as retired.
3. Remove `wrangler.toml` files from demo apps.
4. Delete Pages projects in Cloudflare dashboard with explicit approval.
5. Remove Pages entries from documentation.

## Do not retire early

Pages projects provide a rollback path during AWS migration. ADR 0012 governs this decision.
