import { describe, expect, it } from 'vitest';

import { ServiceAreaSchema } from './service-area.js';

describe('ServiceAreaSchema', () => {
  it('rejects when localIntroduction duplicates summary', () => {
    const result = ServiceAreaSchema.safeParse({
      slug: 'north-hills',
      name: 'North Hills',
      regionLabel: 'North Hills, Example Region',
      summary: 'Fictional service area summary for demonstration.',
      localIntroduction: 'Fictional service area summary for demonstration.',
      neighborhoods: ['Example Heights'],
      featuredServices: ['lawn-care'],
      heroImage: { src: '/images/area.svg', alt: 'Map illustration' },
    });

    expect(result.success).toBe(false);
  });
});
