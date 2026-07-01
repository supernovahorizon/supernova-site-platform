# Landscaping Golden Path Plan

## Current reusable capabilities

- `@supernova/content-schema` — minimal `BusinessIdentity` and `SiteConfig`
- `@supernova/site-runtime` — `defineSiteConfig`, basic page metadata
- `@supernova/design-tokens` — CSS custom properties
- `@supernova/ui-primitives` — Container, Section, Heading, ButtonLink
- `@supernova/seo` — robots.txt and sitemap entry builders
- `@supernova/structured-data` — basic LocalBusiness JSON-LD
- `@supernova/forms` — minimal contact and quote schemas
- `@supernova/vertical-landscaping` — demo service list only
- `apps/demo-landscaping` — single-page Astro stub

## Missing capabilities

- Full landscaping content model with validation and actionable errors
- Reusable Astro sections (header, hero, galleries, forms, footer)
- Page route registry and static path generation
- SEO metadata (Open Graph, canonical, breadcrumbs)
- Structured data for Service, BreadcrumbList, FAQPage
- Quote form with adapter interface and mock submission
- Media alt-text and placeholder conventions
- Accessibility helpers (skip link, reduced motion)
- Analytics noop adapter
- CLI `create-site` skeleton generator
- Second demo site proving configuration-only differentiation

## Package boundaries

| Package                | Responsibility                                     |
| ---------------------- | -------------------------------------------------- |
| `content-schema`       | Generic entities shared across verticals           |
| `vertical-landscaping` | Landscaping schemas, routes, fixtures, page shells |
| `ui-sections`          | Presentation-only Astro sections; no business data |
| `site-runtime`         | Site definition and page metadata orchestration    |
| `seo`                  | Metadata and sitemap builders                      |
| `structured-data`      | JSON-LD factories                                  |
| `forms`                | Validation contracts and lead adapters             |
| `media`                | Image asset validation helpers                     |
| `accessibility`        | Shared a11y utilities and styles                   |
| `analytics`            | Provider interface (noop default)                  |
| `cli`                  | `create-site` scaffolding                          |
| `apps/demo-*`          | Fictional business content and thin Astro routes   |

## Page generation flow

1. Author validates `LandscapingSiteContent` (TypeScript + Zod).
2. `vertical-landscaping` derives route manifest from services and service areas.
3. Demo app Astro pages call `getLandscapingStaticPaths()` and render shared section compositions.
4. `seo` and `structured-data` build per-page metadata from content fields.
5. Forms submit through `MockLeadAdapter` in development.

## Content model changes

Extend schemas for contact, hours, branding, navigation, services, service areas, projects, before/after media, testimonials, FAQ, CTAs, social profiles, SEO defaults, analytics, and lead-form configuration.

## Risks

- Astro workspace package resolution for many `.astro` files
- Scope creep into AWS or CMS
- Thin service-area pages without meaningful local content

## Non-goals (this milestone)

- AWS deployment, DNS, production hosting
- CMS adapters, billing, control plane
- Real client repositories or content
- Fashion vertical changes unless shared fix required
- GitHub repo creation in CLI

## Acceptance criteria

- [ ] All listed landscaping page types render from shared sections
- [ ] Invalid content fails validation with clear paths
- [ ] Two fictional demos differ only in configuration/content/assets
- [ ] `pnpm supernova create-site` generates deterministic skeleton
- [ ] Quality gates pass: format, lint, typecheck, test, build
- [ ] Reuse validation report documents changed vs unchanged files
