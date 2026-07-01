import { describe, expect, it } from 'vitest';

import { createLocalBusinessJsonLd } from './local-business.js';

describe('createLocalBusinessJsonLd', () => {
  it('marks demonstration businesses clearly', () => {
    const jsonLd = createLocalBusinessJsonLd({
      business: {
        legalName: 'Evergreen Grove Landscaping LLC',
        displayName: 'Evergreen Grove Landscaping',
        tagline: 'Fictional demonstration landscaping services',
        description: 'Demonstration landscaping business.',
        vertical: 'landscaping',
        isDemonstration: true,
      },
      siteUrl: 'https://demo-landscaping.example.test',
    });

    expect(jsonLd.disclaimer).toContain('Fictional demonstration');
  });
});
