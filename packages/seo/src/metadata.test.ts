import { describe, expect, it } from 'vitest';

import { buildPageMetadata } from './metadata.js';

describe('buildPageMetadata', () => {
  it('builds canonical and open graph fields', () => {
    const metadata = buildPageMetadata({
      siteUrl: 'https://demo.example.test',
      path: '/services/lawn-care',
      title: 'Lawn Care',
      description: 'Fictional demonstration service page.',
      socialImage: { src: '/images/og.svg', alt: 'Open graph illustration' },
    });

    expect(metadata.canonical).toBe('https://demo.example.test/services/lawn-care');
    expect(metadata.openGraph.image).toContain('/images/og.svg');
  });
});
