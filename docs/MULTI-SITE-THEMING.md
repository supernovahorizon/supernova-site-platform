# Multi-site theming

Both landscaping demos share one Astro page tree and `@supernova/ui-sections`, but render as distinct brands via configuration.

## Site selection

Each app imports a fixture and parses it through `parseLandscapingSite()`:

- `apps/demo-landscaping` → `evergreenGroveFixture`
- `apps/demo-landscaping-blue-ridge` → `blueRidgeFixture`

## Theme schema

`ThemeConfig` (`packages/vertical-landscaping/src/theme.ts`):

- `id`: `evergreen-grove` | `blue-ridge`
- `navigationVariant`, `heroVariant`, `serviceCardVariant`, `projectGalleryVariant`, `ctaVariant`, `footerVariant`
- `sectionOrder`: homepage section composition

## Adding a third demo

1. Create a new fixture with unique `theme`, `branding`, content, and `public/images/`.
2. Scaffold `apps/demo-<slug>/` mirroring an existing app (`site.ts`, pages, layout).
3. Register routes in infrastructure/CDK and GitHub Actions deploy workflow.
4. Choose a distinct combination of variants — not only color swaps.
