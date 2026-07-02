import { describe, expect, it } from 'vitest';
import { blueRidgeFixture, evergreenGroveFixture } from '@supernova/vertical-landscaping';

describe('production demo URL fixtures', () => {
  it('uses the public landscaping demo domain with indexable robots', () => {
    expect(evergreenGroveFixture.siteUrl).toBe('https://landscaping.sites.supernovahorizon.com');
    expect(evergreenGroveFixture.seo.robots).toBe('index,follow');
  });

  it('uses the Blue Ridge demo domain with noindex robots', () => {
    expect(blueRidgeFixture.siteUrl).toBe('https://blue-ridge.sites.supernovahorizon.com');
    expect(blueRidgeFixture.seo.robots).toBe('noindex,nofollow');
  });
});
