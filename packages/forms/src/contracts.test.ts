import { describe, expect, it } from 'vitest';

import { ContactFormSchema } from './contracts.js';

describe('ContactFormSchema', () => {
  it('requires explicit contact consent', () => {
    expect(() =>
      ContactFormSchema.parse({
        name: 'Demo User',
        email: 'demo@example.test',
        message: 'This is a demonstration inquiry.',
        consentToContact: false,
      }),
    ).toThrow();
  });
});
