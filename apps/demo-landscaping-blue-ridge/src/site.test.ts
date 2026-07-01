import { describe, expect, it } from 'vitest';

import { site } from './site';

describe('demo-landscaping-blue-ridge site', () => {
  it('loads the blue ridge demonstration fixture', () => {
    expect(site.business.isDemonstration).toBe(true);
    expect(site.business.displayName).toBe('Blue Ridge Terrain Works');
    expect(site.services.some((service) => service.slug === 'erosion-control')).toBe(true);
  });
});
