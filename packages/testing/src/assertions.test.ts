import { describe, expect, it } from 'vitest';

import { assertDemonstrationBusiness } from './assertions.js';

describe('assertDemonstrationBusiness', () => {
  it('accepts demonstration identities', () => {
    expect(() =>
      assertDemonstrationBusiness({
        legalName: 'Demo LLC',
        displayName: 'Demo',
        tagline: 'Demonstration only',
        description: 'Fictional business.',
        vertical: 'generic',
        isDemonstration: true,
      }),
    ).not.toThrow();
  });
});
