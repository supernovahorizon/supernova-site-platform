# SEO — landscaping demos

## Rendering

Astro static generation pre-renders all indexable routes. Primary content, headings, and internal links are present in initial HTML on mobile and desktop.

## Per-page metadata

`LandscapingLayout.astro` uses `@supernova/seo` `buildPageMetadata()` for:

- Unique `<title>` and meta description
- Canonical URL
- Open Graph tags
- Robots directive from site config

## Structured data

- Home: `LocalBusiness` / `HomeAndConstructionBusiness` via `createLocalBusinessJsonLd`
- Service detail: `Service` + `BreadcrumbList`
- FAQ: accordion HTML + optional FAQ JSON-LD where content matches visible copy

No `AggregateRating` or review schema is emitted.

## Discovery

- `src/pages/sitemap.xml.ts` — generated from site routes
- `src/pages/robots.txt.ts` — environment-aware
- Crawlable `<a href>` navigation throughout

## Local SEO readiness

Business name, phone, email, hours, areas served, and services are configuration-driven in fixtures — not hardcoded in components.
