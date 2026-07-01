import { describe, expect, it } from 'vitest';

import { defineSiteConfig } from './define-site-config.js';

const baseInput = {
  business: {
    legalName: 'Evergreen Grove Landscaping LLC',
    displayName: 'Evergreen Grove Landscaping',
    tagline: 'Fictional demonstration landscaping services',
    description: 'Demonstration landscaping business for the Supernova Site Platform.',
    vertical: 'landscaping' as const,
    isDemonstration: true as const,
  },
  siteUrl: 'https://demo-landscaping.example.test',
  locale: 'en-US',
  themeId: 'landscaping-default',
  navigation: [{ label: 'Home', href: '/' }],
};

describe('defineSiteConfig', () => {
  it('returns validated demonstration site configuration', () => {
    const config = defineSiteConfig(baseInput);
    expect(config.business.vertical).toBe('landscaping');
  });
});
