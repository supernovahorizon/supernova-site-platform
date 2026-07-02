# Cloudflare landscaping demo deployment plan

## Scope

Deploy two fictional landscaping demonstrations from `supernovahorizon/supernova-site-platform` without touching the production company website at `supernovahorizon.com`.

## Projects

| Logical name           | Cloudflare project           | Application                        | Custom domain                          | Indexing  |
| ---------------------- | ---------------------------- | ---------------------------------- | -------------------------------------- | --------- |
| Evergreen Grove        | `supernova-demo-landscaping` | `apps/demo-landscaping`            | `landscaping.supernovahorizon.com`     | indexable |
| Blue Ridge reuse proof | `supernova-demo-blue-ridge`  | `apps/demo-landscaping-blue-ridge` | `blue-ridge-demo.supernovahorizon.com` | `noindex` |

## Build settings (monorepo root)

Both projects build from the repository root with pnpm workspace filters.

### `supernova-demo-landscaping`

- Production branch: `main`
- Root directory: `/`
- Build command: `pnpm install --frozen-lockfile && pnpm --filter @supernova/demo-landscaping build`
- Output directory: `apps/demo-landscaping/dist`
- Watch paths:
  - `apps/demo-landscaping/**`
  - `packages/**`
  - `pnpm-lock.yaml`
  - `package.json`
  - `pnpm-workspace.yaml`
  - `turbo.json`

### `supernova-demo-blue-ridge`

- Production branch: `main`
- Root directory: `/`
- Build command: `pnpm install --frozen-lockfile && pnpm --filter @supernova/demo-landscaping-blue-ridge build`
- Output directory: `apps/demo-landscaping-blue-ridge/dist`
- Watch paths:
  - `apps/demo-landscaping-blue-ridge/**`
  - `packages/**`
  - `pnpm-lock.yaml`
  - `package.json`
  - `pnpm-workspace.yaml`
  - `turbo.json`

## DNS

Add proxied CNAME records in the existing `supernovahorizon.com` zone:

- `landscaping` → `<supernova-demo-landscaping>.pages.dev`
- `blue-ridge-demo` → `<supernova-demo-blue-ridge>.pages.dev`

Do not modify the apex `supernovahorizon.com` record that points to CloudFront.

## GitHub App access

Authorize the Cloudflare Pages GitHub App for the `supernovahorizon` organization with selected repositories:

- `supernovahorizon/supernova-site-platform`

The company website repository does not use Cloudflare Pages Git integration; it deploys through GitHub Actions to AWS.

## Verification checklist

- `https://landscaping.supernovahorizon.com/` returns 200
- `robots.txt` allows indexing and references the production sitemap
- `sitemap.xml` lists URLs on `landscaping.supernovahorizon.com`
- `https://blue-ridge-demo.supernovahorizon.com/` returns 200
- Blue Ridge pages include `noindex` metadata and `robots.txt` disallows crawling
- TLS certificates are valid on both subdomains
- `https://supernovahorizon.com` remains unchanged

## Rollback

1. Remove or disable the custom domain on the affected Pages project.
2. Delete the demo DNS CNAME if necessary.
3. Roll back the Pages project to the previous successful deployment from the Cloudflare dashboard.
4. Revert the platform commit if fixture URLs or SEO settings must be restored.
