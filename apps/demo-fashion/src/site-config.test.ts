import { describe, expect, it } from 'vitest';

import { siteConfig } from './site.config';

describe('demo-fashion site config', () => {
  it('uses a demonstration business identity', () => {
    expect(siteConfig.business.isDemonstration).toBe(true);
    expect(siteConfig.business.vertical).toBe('fashion-jewelry');
  });
});
