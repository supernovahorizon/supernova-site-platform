import { QuoteRequestSchema } from '@supernova/forms';
import { describe, expect, it } from 'vitest';
import {
  assertQuoteRequestFieldCoverage,
  formatDayHours,
  formatPostalAddress,
  getFictionalDemonstrationLabel,
  getQuoteRequestInputNames,
  normalizeNavigationItems,
  QUOTE_REQUEST_FIELD_NAMES,
  requiresFictionalDemonstrationLabel,
  resolveServiceHref,
  validateBreadcrumbTrail,
} from './props.js';

describe('normalizeNavigationItems', () => {
  it('removes empty navigation entries', () => {
    expect(
      normalizeNavigationItems([
        { label: 'Services', href: '/services' },
        { label: ' ', href: '/about' },
        { label: 'Contact', href: ' ' },
      ]),
    ).toEqual([{ label: 'Services', href: '/services' }]);
  });
});

describe('href resolvers', () => {
  it('uses explicit href when provided', () => {
    expect(resolveServiceHref({ slug: 'lawn-care', href: '/custom' })).toBe('/custom');
  });

  it('falls back to slug-based paths', () => {
    expect(resolveServiceHref({ slug: 'lawn-care' })).toBe('/services/lawn-care');
  });
});

describe('fictional demonstration labels', () => {
  it('detects when section label is required', () => {
    expect(
      requiresFictionalDemonstrationLabel([
        { id: '1', quote: 'Great work.', authorName: 'A', authorContext: 'Homeowner' },
        {
          id: '2',
          quote: 'Sample quote.',
          authorName: 'B',
          authorContext: 'Neighbor',
          isFictionalDemonstration: true,
        },
      ]),
    ).toBe(true);
  });

  it('returns label only for fictional testimonials', () => {
    expect(getFictionalDemonstrationLabel(true, 'Demo only')).toBe('Demo only');
    expect(getFictionalDemonstrationLabel(false, 'Demo only')).toBeNull();
  });
});

describe('validateBreadcrumbTrail', () => {
  it('requires href on non-terminal crumbs', () => {
    expect(() =>
      validateBreadcrumbTrail([
        { label: 'Home', href: '/' },
        { label: 'Services' },
        { label: 'Lawn care', href: '/services/lawn-care' },
      ]),
    ).toThrow(/requires an href/);
  });

  it('strips href from the current page crumb', () => {
    expect(
      validateBreadcrumbTrail([
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
      ]),
    ).toEqual([{ label: 'Home', href: '/' }, { label: 'Services' }]);
  });
});

describe('formatting helpers', () => {
  it('formats business hours', () => {
    expect(formatDayHours({ open: '08:00', close: '17:00' })).toBe('08:00 – 17:00');
    expect(formatDayHours(undefined)).toBe('Closed');
  });

  it('formats postal addresses', () => {
    expect(
      formatPostalAddress({
        street: '123 Demo St',
        city: 'Sampletown',
        region: 'CA',
        postalCode: '90000',
        country: 'US',
      }),
    ).toBe('123 Demo St, Sampletown, CA 90000, US');
  });
});

describe('quote request field coverage', () => {
  it('documents all schema-backed input names', () => {
    expect(getQuoteRequestInputNames()).toEqual([...QUOTE_REQUEST_FIELD_NAMES]);
    expect(() => assertQuoteRequestFieldCoverage(getQuoteRequestInputNames())).not.toThrow();
  });

  it('aligns with QuoteRequestSchema keys', () => {
    const sample = {
      name: 'Alex Example',
      email: 'alex@example.com',
      phone: '555-0100',
      requestedService: 'Lawn care',
      serviceAddressOrZip: '90000',
      preferredContactMethod: 'email' as const,
      projectDescription: 'Need help with a demonstration landscaping project.',
      budgetRange: 'Under $1,000',
      consentAcknowledgment: true as const,
      honeypot: '' as const,
    };

    expect(QuoteRequestSchema.safeParse(sample).success).toBe(true);
    expect(getQuoteRequestInputNames().sort()).toEqual(
      Object.keys(QuoteRequestSchema.shape).sort(),
    );
  });
});
