import { describe, expect, it } from 'vitest';

import { validateLandscapingSiteQuality } from './audit.js';
import { blueRidgeFixture, evergreenGroveFixture, parseLandscapingSite } from './index.js';

describe('validateLandscapingSiteQuality', () => {
  it('passes for evergreen grove fixture', () => {
    const site = parseLandscapingSite(evergreenGroveFixture);
    const report = validateLandscapingSiteQuality(site);

    expect(report.valid).toBe(true);
    expect(report.issues).toHaveLength(0);
  });

  it('passes for blue ridge fixture', () => {
    const site = parseLandscapingSite(blueRidgeFixture);
    const report = validateLandscapingSiteQuality(site);

    expect(report.valid).toBe(true);
    expect(report.issues).toHaveLength(0);
  });

  it('reports missing image alt text', () => {
    const site = parseLandscapingSite(evergreenGroveFixture);
    const report = validateLandscapingSiteQuality({
      ...site,
      services: site.services.map((service, index) =>
        index === 0
          ? {
              ...service,
              heroImage: { ...service.heroImage, alt: '   ' },
            }
          : service,
      ),
    });

    expect(report.valid).toBe(false);
    expect(report.issues.some((issue) => issue.code === 'image.missing-alt')).toBe(true);
  });
});
