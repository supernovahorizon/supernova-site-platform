import { describe, expect, it } from 'vitest';

import { site } from './site';

describe('demo-landscaping site', () => {
  it('loads the evergreen grove demonstration fixture', () => {
    expect(site.business.isDemonstration).toBe(true);
    expect(site.business.displayName).toBe('Evergreen Grove Landscaping');
    expect(site.services.length).toBeGreaterThanOrEqual(3);
  });
});
