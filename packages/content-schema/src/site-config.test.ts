import { describe, expect, it } from 'vitest';

import { BusinessIdentitySchema, SiteConfigSchema } from './site-config.js';

const validBusiness = {
  legalName: 'Evergreen Grove Landscaping LLC',
  displayName: 'Evergreen Grove Landscaping',
  tagline: 'Fictional demonstration landscaping services',
  description:
    'A demonstration business used to showcase the Supernova Site Platform landscaping vertical.',
  vertical: 'landscaping' as const,
  isDemonstration: true as const,
};

const validSiteConfig = {
  business: validBusiness,
  siteUrl: 'https://demo-landscaping.example.test',
  locale: 'en-US',
  themeId: 'landscaping-default',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
  ],
};

describe('BusinessIdentitySchema', () => {
  it('accepts a valid demonstration business identity', () => {
    expect(BusinessIdentitySchema.parse(validBusiness)).toEqual(validBusiness);
  });

  it('rejects identities that are not marked as demonstrations', () => {
    expect(() =>
      BusinessIdentitySchema.parse({ ...validBusiness, isDemonstration: false }),
    ).toThrow();
  });
});

describe('SiteConfigSchema', () => {
  it('accepts a valid site configuration', () => {
    expect(SiteConfigSchema.parse(validSiteConfig)).toEqual(validSiteConfig);
  });

  it('rejects invalid site URLs', () => {
    expect(() => SiteConfigSchema.parse({ ...validSiteConfig, siteUrl: 'not-a-url' })).toThrow();
  });

  it('requires at least one navigation item', () => {
    expect(() => SiteConfigSchema.parse({ ...validSiteConfig, navigation: [] })).toThrow();
  });
});
