import { describe, expect, it } from 'vitest';

import { siteConfig } from './site.config';

describe('demo-landscaping site config', () => {
  it('uses a demonstration business identity', () => {
    expect(siteConfig.business.isDemonstration).toBe(true);
    expect(siteConfig.business.vertical).toBe('landscaping');
  });
});
