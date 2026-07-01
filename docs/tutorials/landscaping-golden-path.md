# Landscaping Golden Path Tutorial

## Prerequisites

```bash
cd ~/Desktop/Personal/Supernova/repositories/supernova-site-platform
corepack enable
pnpm install
pnpm build
```

## Run demonstration sites

```bash
pnpm --filter @supernova/demo-landscaping dev
pnpm --filter @supernova/demo-landscaping-blue-ridge dev
```

## Generate a new landscaping skeleton

```bash
pnpm --filter @supernova/cli build
pnpm supernova create-site \
  --name "Blue Ridge Outdoor Living" \
  --slug blue-ridge-outdoor-living \
  --vertical landscaping \
  --dry-run

pnpm supernova create-site \
  --name "Blue Ridge Outdoor Living" \
  --slug blue-ridge-outdoor-living \
  --vertical landscaping \
  --output ./generated/blue-ridge-outdoor-living
```

## Customize content

1. Edit `src/content/landscaping/site-content.placeholder.json` or replace with a typed fixture.
2. Validate with `parseLandscapingSite()` from `@supernova/vertical-landscaping`.
3. Update `public/images/` with licensed media.
4. Adjust branding colors in the validated content model.

## Add a service

Add an entry to the `services` array with unique `slug`, summary, description, benefits, and `heroImage.alt`.

## Add a service area

Add an entry to `serviceAreas` with meaningful `localIntroduction` text that differs from `summary`.

## Theme customization

Set `branding.primaryColor`, `branding.accentColor`, and `branding.fontFamily` in site content. Layout maps these to CSS custom properties.

## SEO configuration

Configure `seo.titleSuffix`, `seo.defaultDescription`, `seo.socialImage`, and per-page titles in layout props.

## Form configuration

Configure `leadForm.services`, `leadForm.successMessage`, and `leadForm.privacyPolicyHref`. Submissions use `MockLeadAdapter` in demonstrations.

## Quality checks

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Deferred intentionally

- AWS deployment and DNS
- CMS integrations
- npm package publication
- Real client repositories
