import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import {
  buildSiteFiles,
  createSite,
  formatDryRunPlan,
  isValidSlug,
  validateSlug,
} from './create-site.js';

describe('validateSlug', () => {
  it('accepts kebab-case slugs', () => {
    expect(isValidSlug('blue-ridge-outdoor-living')).toBe(true);
    expect(isValidSlug('site2')).toBe(true);
    expect(() => validateSlug('blue-ridge-outdoor-living')).not.toThrow();
  });

  it('rejects invalid slugs', () => {
    expect(isValidSlug('Blue-Ridge')).toBe(false);
    expect(isValidSlug('blue_ridge')).toBe(false);
    expect(isValidSlug('blue-ridge-')).toBe(false);
    expect(() => validateSlug('Blue Ridge')).toThrow(/kebab-case/);
  });
});

describe('createSite dry-run', () => {
  it('returns a deterministic plan without writing files', async () => {
    const destination = await mkdtemp(join(tmpdir(), 'supernova-cli-dry-run-'));

    try {
      const result = await createSite({
        name: 'Blue Ridge Outdoor Living',
        slug: 'blue-ridge-outdoor-living',
        vertical: 'landscaping',
        output: destination,
        dryRun: true,
      });

      expect(result.dryRun).toBe(true);
      expect(result.written).toBe(false);
      expect(result.files.length).toBeGreaterThan(0);
      expect(result.files.map((file) => file.relativePath)).toEqual(
        buildSiteFiles({
          name: 'Blue Ridge Outdoor Living',
          slug: 'blue-ridge-outdoor-living',
          vertical: 'landscaping',
        }).map((file) => file.relativePath),
      );
      expect(formatDryRunPlan(result.destination, result.files)).toContain('Dry run:');

      const entries = await readdir(destination);
      expect(entries).toHaveLength(0);
    } finally {
      await rm(destination, { recursive: true, force: true });
    }
  });
});

describe('createSite overwrite protection', () => {
  it('refuses to write into a nonempty destination', async () => {
    const destination = await mkdtemp(join(tmpdir(), 'supernova-cli-overwrite-'));

    try {
      await writeFile(join(destination, 'existing.txt'), 'keep me', 'utf8');

      await expect(
        createSite({
          name: 'Blue Ridge Outdoor Living',
          slug: 'blue-ridge-outdoor-living',
          vertical: 'landscaping',
          output: destination,
        }),
      ).rejects.toThrow(/Refusing to overwrite nonempty destination/);

      const entries = await readdir(destination);
      expect(entries).toEqual(['existing.txt']);
    } finally {
      await rm(destination, { recursive: true, force: true });
    }
  });

  it('writes files into an empty destination', async () => {
    const destination = await mkdtemp(join(tmpdir(), 'supernova-cli-write-'));

    try {
      const result = await createSite({
        name: 'Blue Ridge Outdoor Living',
        slug: 'blue-ridge-outdoor-living',
        vertical: 'landscaping',
        output: destination,
      });

      expect(result.written).toBe(true);
      expect(result.dryRun).toBe(false);

      const siteConfig = await readFile(join(destination, 'src/site.config.ts'), 'utf8');
      expect(siteConfig).toContain('Blue Ridge Outdoor Living');
      expect(siteConfig).not.toContain('process.env');

      const envEntries = result.files.map((file) => file.relativePath);
      expect(envEntries).toContain('.env.example');
      expect(envEntries).not.toContain('.env');
    } finally {
      await rm(destination, { recursive: true, force: true });
    }
  });

  it('rejects unknown verticals', async () => {
    const destination = await mkdtemp(join(tmpdir(), 'supernova-cli-vertical-'));

    try {
      await expect(
        createSite({
          name: 'Example Site',
          slug: 'example-site',
          vertical: 'fashion-jewelry',
          output: destination,
          dryRun: true,
        }),
      ).rejects.toThrow(/Unknown vertical/);
    } finally {
      await rm(destination, { recursive: true, force: true });
    }
  });
});
