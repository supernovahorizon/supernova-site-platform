# Design system — Natural Precision

The landscaping demos use a shared **Natural Precision** design language: warm outdoor craft paired with crisp, product-grade UI.

## Tokens

Theme tokens live in `@supernova/vertical-landscaping` (`theme.ts`) and are injected per site in `LandscapingLayout.astro`:

- Color: background, surface, text, accent, border, overlay
- Typography: body, display, heading stacks (Google Fonts, `font-display: swap`)
- Radius, shadow, spacing via CSS custom properties (`--sn-*`)

## Components

Shared sections in `@supernova/ui-sections`:

| Component                             | Purpose                                         |
| ------------------------------------- | ----------------------------------------------- |
| `HeroSection`                         | Editorial or cinematic hero with dual CTAs      |
| `TrustStripSection`                   | Demo-safe trust/value strip                     |
| `ServiceCardsSection`                 | Organic or geometric service cards with imagery |
| `BeforeAfterSection`                  | Slider + Show before/after buttons              |
| `ProjectGallerySection`               | Editorial or grid gallery                       |
| `ProcessSection` / `WhyChooseSection` | Conversion storytelling                         |
| `QuoteRequestFormSection`             | Accessible three-step quote flow                |
| `SiteHeader` / `SiteFooter`           | Sticky nav, mobile menu, sticky mobile CTA      |

## Variants

Each demo selects variants through `theme` in its fixture:

- **Evergreen Grove** — editorial hero, organic cards, warm CTA, light footer
- **Blue Ridge** — cinematic hero, geometric cards, bold CTA, dark footer
