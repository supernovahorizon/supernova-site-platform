import { describe, expect, it } from 'vitest';

import { createSiteConfig } from './create-site-config.js';

describe('createSiteConfig', () => {
  it('returns a validated site configuration', () => {
    const config = createSiteConfig({
      business: {
        legalName: 'Lumen Atelier LLC',
        displayName: 'Lumen Atelier',
        tagline: 'Fictional demonstration fashion and jewelry studio',
        description:
          'A demonstration business used to showcase the Supernova Site Platform fashion vertical.',
        vertical: 'fashion-jewelry',
        isDemonstration: true,
      },
      siteUrl: 'https://demo-fashion.example.test',
      locale: 'en-US',
      themeId: 'fashion-default',
      navigation: [{ label: 'Home', href: '/' }],
    });

    expect(config.business.displayName).toBe('Lumen Atelier');
  });
});
