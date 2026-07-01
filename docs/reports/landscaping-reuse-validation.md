# Landscaping Reuse Validation

## Second fictional business

`apps/demo-landscaping-blue-ridge` uses the **Blue Ridge Outdoor Living** fixture while `apps/demo-landscaping` uses **Evergreen Grove Landscaping**.

## Files that changed between businesses

| Area              | Evergreen Grove                          | Blue Ridge Outdoor Living                           |
| ----------------- | ---------------------------------------- | --------------------------------------------------- |
| Site content      | `apps/demo-landscaping/src/site.ts`      | `apps/demo-landscaping-blue-ridge/src/site.ts`      |
| Astro site URL    | `apps/demo-landscaping/astro.config.mjs` | `apps/demo-landscaping-blue-ridge/astro.config.mjs` |
| Brand assets      | `apps/demo-landscaping/public/images/*`  | `apps/demo-landscaping-blue-ridge/public/images/*`  |
| Package name/port | `apps/demo-landscaping/package.json`     | `apps/demo-landscaping-blue-ridge/package.json`     |

## Files intentionally identical (reuse proof)

- `src/layouts/LandscapingLayout.astro`
- All `src/pages/**` routes (home, services, service areas, about, projects, FAQ, contact, quote, privacy, 404)

## Shared packages (unchanged per business)

- `@supernova/vertical-landscaping` — schema, routes, audit, fixtures
- `@supernova/ui-sections` — all section components
- `@supernova/seo`, `@supernova/structured-data`, `@supernova/forms`
- `@supernova/design-tokens`, `@supernova/ui-primitives`, `@supernova/accessibility`

## Remaining obstacles to rapid client creation

- Client sites still require an Astro app shell (or CLI-generated skeleton) per business
- GitHub repository creation remains a separate ops step
- Platform packages are workspace-linked, not yet published for external client repos
- Quote form uses mock validation; production adapters are deferred

## Media licensing

Placeholder SVG assets are generated in-repository with neutral geometry and fictional labels. Replace with client-licensed photography before any public launch.
