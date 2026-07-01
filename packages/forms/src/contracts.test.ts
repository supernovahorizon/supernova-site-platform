import { describe, expect, it } from 'vitest';

import { ContactFormSchema, QuoteRequestSchema } from './contracts.js';

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

describe('QuoteRequestSchema', () => {
  it('accepts a complete quote request', () => {
    const parsed = QuoteRequestSchema.parse({
      name: 'Demo User',
      email: 'demo@example.test',
      phone: '555-0100',
      requestedService: 'Garden Design',
      serviceAddressOrZip: '97201',
      preferredContactMethod: 'email',
      projectDescription: 'Fictional demonstration landscaping project inquiry.',
      consentAcknowledgment: true,
    });

    expect(parsed.requestedService).toBe('Garden Design');
  });
});
