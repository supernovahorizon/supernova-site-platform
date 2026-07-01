import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

import { assertVerticalExists } from '@supernova/vertical-landscaping';

export const KEBAB_CASE_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type CreateSiteInput = {
  name: string;
  slug: string;
  vertical: string;
  output?: string | undefined;
  dryRun?: boolean | undefined;
  cwd?: string | undefined;
};

export type PlannedFile = {
  relativePath: string;
  content: string;
};

export type CreateSiteResult = {
  destination: string;
  files: PlannedFile[];
  dryRun: boolean;
  written: boolean;
};

export function isValidSlug(slug: string): boolean {
  return KEBAB_CASE_SLUG_PATTERN.test(slug);
}

export function validateSlug(slug: string): void {
  if (!isValidSlug(slug)) {
    throw new Error(
      `Invalid slug "${slug}". Slugs must be kebab-case (lowercase letters, numbers, and hyphens only).`,
    );
  }
}

export function validateCreateSiteInput(input: CreateSiteInput): {
  name: string;
  slug: string;
  vertical: string;
  destination: string;
  dryRun: boolean;
} {
  const name = input.name.trim();
  if (!name) {
    throw new Error('Site name is required. Pass --name "Your Business Name".');
  }

  const slug = input.slug.trim();
  validateSlug(slug);

  const vertical = assertVerticalExists(input.vertical.trim());

  const cwd = input.cwd ?? process.cwd();
  const destination = resolve(cwd, input.output ?? join('generated', slug));
  const dryRun = input.dryRun ?? false;

  return { name, slug, vertical, destination, dryRun };
}

export function buildSiteFiles(input: {
  name: string;
  slug: string;
  vertical: string;
}): PlannedFile[] {
  const { name, slug, vertical } = input;
  const siteUrl = `https://${slug}.example.test`;
  const themeId = `${vertical}-default`;

  const files: PlannedFile[] = [
    {
      relativePath: 'package.json',
      content: `${JSON.stringify(
        {
          name: `@client/${slug}`,
          version: '0.0.0',
          private: true,
          type: 'module',
          scripts: {
            dev: 'astro dev',
            build: 'astro build',
            preview: 'astro preview',
            lint: 'eslint "src/**/*.ts"',
            typecheck: 'astro check',
            test: 'vitest run',
          },
          dependencies: {
            '@supernova/design-tokens': 'workspace:*',
            '@supernova/site-runtime': 'workspace:*',
            '@supernova/structured-data': 'workspace:*',
            '@supernova/ui-primitives': 'workspace:*',
            '@supernova/vertical-landscaping': 'workspace:*',
            astro: '^5.9.3',
          },
          devDependencies: {
            '@astrojs/check': '^0.9.4',
            '@supernova/eslint-config': 'workspace:*',
            '@supernova/typescript-config': 'workspace:*',
            eslint: '^9.28.0',
            typescript: '^5.8.3',
            vitest: '^3.2.4',
          },
        },
        null,
        2,
      )}\n`,
    },
    {
      relativePath: 'astro.config.mjs',
      content: `import { defineConfig } from 'astro/config';

export default defineConfig({
  site: '${siteUrl}',
  vite: {
    ssr: {
      noExternal: [/^@supernova\\//],
    },
  },
});
`,
    },
    {
      relativePath: 'tsconfig.json',
      content: `{
  "extends": "@supernova/typescript-config/astro.json",
  "include": ["src/**/*"],
  "exclude": ["dist"]
}
`,
    },
    {
      relativePath: '.env.example',
      content: `# Public configuration only. Copy to .env locally and never commit secrets.
PUBLIC_SITE_URL=${siteUrl}
`,
    },
    {
      relativePath: 'README.md',
      content: `# ${name}

Generated client site skeleton for the Supernova Site Platform (${vertical} vertical).

## Getting started

1. Review and update \`src/site.config.ts\`.
2. Replace placeholder content under \`src/content/${vertical}/\`.
3. Copy \`.env.example\` to \`.env\` locally (never commit \`.env\`).
4. Install dependencies from the platform monorepo root, then run \`pnpm dev\` in this directory.

## Safety

- This repository must not contain production secrets or real client lead data.
- Use fictional or approved client content until launch workflows are configured.
`,
    },
    {
      relativePath: 'AGENTS.md',
      content: `# Agent Rules

1. Never commit secrets, client lead data, or production credentials.
2. Do not create \`.env\` files in automation; use \`.env.example\` as the template.
3. Keep business copy in content files, not in shared platform packages.
4. Run lint, typecheck, and tests before proposing changes.
`,
    },
    {
      relativePath: 'public/images/placeholder.svg',
      content: `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360" role="img" aria-label="Placeholder image">
  <rect width="640" height="360" fill="#e2e8f0"/>
  <text x="320" y="180" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, sans-serif" font-size="20" fill="#475569">
    Placeholder image
  </text>
</svg>
`,
    },
    {
      relativePath: 'src/env.d.ts',
      content: `/// <reference types="astro/client" />
`,
    },
    {
      relativePath: 'src/site.config.ts',
      content: `import { defineSiteConfig } from '@supernova/site-runtime';

/**
 * Placeholder site configuration for ${name}.
 * Update legalName, descriptions, and navigation before launch.
 */
export const siteConfig = defineSiteConfig({
  business: {
    legalName: 'REPLACE_ME Legal Name LLC',
    displayName: '${name}',
    tagline: 'REPLACE_ME short tagline for ${name}',
    description:
      'REPLACE_ME business description. Keep copy in content files where possible.',
    vertical: '${vertical}',
    isDemonstration: true,
  },
  siteUrl: '${siteUrl}',
  locale: 'en-US',
  themeId: '${themeId}',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
});
`,
    },
    {
      relativePath: `src/content/${vertical}/README.md`,
      content: `# ${vertical} content

Place validated site content for \`${name}\` in this directory.

Recommended files:

- \`site-content.json\` — full landscaping content model (see \`@supernova/vertical-landscaping\`)
- \`services/\` — optional per-service markdown or JSON fragments
- \`projects/\` — portfolio entries and media references

Use \`public/images/\` for static assets. The included \`placeholder.svg\` is deterministic scaffolding only.
`,
    },
    {
      relativePath: `src/content/${vertical}/site-content.placeholder.json`,
      content: `${JSON.stringify(
        {
          siteUrl,
          locale: 'en-US',
          business: {
            legalName: 'REPLACE_ME Legal Name LLC',
            displayName: name,
            tagline: 'REPLACE_ME short tagline',
            description: 'REPLACE_ME business description.',
            vertical,
            isDemonstration: true,
          },
          home: {
            heroHeadline: `Welcome to ${name}`,
            heroSubheadline: 'REPLACE_ME hero subheadline',
            intro:
              'REPLACE_ME introductory paragraph with at least forty characters of placeholder copy.',
          },
          services: [],
          serviceAreas: [],
          projects: [],
          beforeAfter: [],
          testimonials: [],
          faq: [],
          ctas: [],
        },
        null,
        2,
      )}\n`,
    },
    {
      relativePath: 'src/pages/index.astro',
      content: `---
import { createPageMetadata } from '@supernova/site-runtime';
import Container from '@supernova/ui-primitives/Container.astro';
import Section from '@supernova/ui-primitives/Section.astro';
import Heading from '@supernova/ui-primitives/Heading.astro';
import '@supernova/design-tokens/css';
import '@supernova/ui-primitives/styles.css';

import { siteConfig } from '../site.config';

const metadata = createPageMetadata({
  site: siteConfig,
  title: 'Home',
  description: siteConfig.business.description,
  path: '/',
});
---

<html lang={siteConfig.locale}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <link rel="canonical" href={metadata.canonical} />
    <meta name="robots" content="noindex,nofollow" />
  </head>
  <body>
    <Section ariaLabel="Home">
      <Container>
        <Heading level={1}>{siteConfig.business.displayName}</Heading>
        <p>{siteConfig.business.tagline}</p>
        <p>
          Generated Supernova skeleton for <strong>${slug}</strong>. Replace this page with
          shared landscaping sections once content is ready.
        </p>
      </Container>
    </Section>
  </body>
</html>
`,
    },
  ];

  return files.sort((left, right) => left.relativePath.localeCompare(right.relativePath));
}

export async function isNonemptyDirectory(path: string): Promise<boolean> {
  try {
    const entries = await readdir(path);
    return entries.length > 0;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return false;
    }

    throw error;
  }
}

export async function assertDestinationWritable(destination: string): Promise<void> {
  if (await isNonemptyDirectory(destination)) {
    throw new Error(
      `Refusing to overwrite nonempty destination "${destination}". Choose a different --output path or remove existing files.`,
    );
  }
}

export function formatDryRunPlan(destination: string, files: PlannedFile[]): string {
  const lines = [
    `Dry run: would create site at ${destination}`,
    `Planned files (${files.length}):`,
    ...files.map((file) => `  - ${file.relativePath}`),
  ];

  return lines.join('\n');
}

export async function createSite(input: CreateSiteInput): Promise<CreateSiteResult> {
  const validated = validateCreateSiteInput(input);
  const files = buildSiteFiles({
    name: validated.name,
    slug: validated.slug,
    vertical: validated.vertical,
  });

  await assertDestinationWritable(validated.destination);

  if (validated.dryRun) {
    return {
      destination: validated.destination,
      files,
      dryRun: true,
      written: false,
    };
  }

  for (const file of files) {
    const absolutePath = join(validated.destination, file.relativePath);
    await mkdir(dirname(absolutePath), { recursive: true });
    await writeFile(absolutePath, file.content, 'utf8');
  }

  return {
    destination: validated.destination,
    files,
    dryRun: false,
    written: true,
  };
}
