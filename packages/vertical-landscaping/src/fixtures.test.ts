import { describe, expect, it } from 'vitest';

import { validateLandscapingSiteQuality } from './audit.js';
import { blueRidgeFixture, evergreenGroveFixture, parseLandscapingSite } from './index.js';
import { getLandscapingRoutes } from './routes.js';

describe('landscaping fixtures', () => {
  it('parses evergreen grove content', () => {
    const site = parseLandscapingSite(evergreenGroveFixture);

    expect(site.business.displayName).toBe('Evergreen Grove Landscaping');
    expect(site.services.length).toBeGreaterThanOrEqual(3);
    expect(getLandscapingRoutes(site).length).toBeGreaterThan(10);
  });

  it('parses blue ridge content with distinct branding and services', () => {
    const site = parseLandscapingSite(blueRidgeFixture);

    expect(site.business.displayName).toBe('Blue Ridge Terrain Works');
    expect(site.branding.primaryColor).not.toBe(evergreenGroveFixture.branding.primaryColor);
    expect(site.services.some((service) => service.slug === 'erosion-control')).toBe(true);
  });

  it('keeps both fixtures quality-clean after parsing', () => {
    for (const fixture of [evergreenGroveFixture, blueRidgeFixture]) {
      const site = parseLandscapingSite(fixture);
      const report = validateLandscapingSiteQuality(site);

      expect(report.valid, JSON.stringify(report.issues)).toBe(true);
    }
  });
});
