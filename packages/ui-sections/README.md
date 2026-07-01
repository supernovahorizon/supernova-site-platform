# @supernova/ui-sections

Presentation-only Astro sections for Supernova marketing sites. Components accept all copy, links, and media through props — no business names or vertical content are hard-coded.

## Usage

```astro
---
import HeroSection from '@supernova/ui-sections/HeroSection.astro';
import '@supernova/ui-sections/shared.css';
---

<HeroSection
  headline={content.home.heroHeadline}
  subheadline={content.home.heroSubheadline}
  cta={{ label: 'View services', href: '/services' }}
/>
```

Prop types and helpers are exported from the package root:

```ts
import { resolveServiceHref, type ServiceCardItem } from '@supernova/ui-sections';
```

## Components

- `SiteHeader.astro` — logo, desktop nav, mobile `details`/`summary` menu
- `SiteFooter.astro` — optional footer links and copyright label
- `HeroSection.astro`
- `ServiceCardsSection.astro`
- `ServiceAreaListingSection.astro`
- `CtaBannerSection.astro`
- `TestimonialsSection.astro` — shows fictional demonstration labels when configured
- `FaqAccordionSection.astro` — native `details`/`summary` accordion
- `ProjectGallerySection.astro`
- `BeforeAfterSection.astro` — CSS range comparison slider with reduced-motion fallback
- `ContactInfoSection.astro`
- `BusinessHoursSection.astro`
- `QuoteRequestFormSection.astro` — accessible fields aligned with `QuoteRequestSchema`
- `Breadcrumbs.astro`
- `DemoBanner.astro`

## Scripts

- `pnpm build` — readiness check
- `pnpm lint` — ESLint on TypeScript helpers
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm test` — Vitest for prop validation helpers
