import { describe, expect, it } from 'vitest';

import {
  LANDSCAPING_VERTICAL_ID,
  assertVerticalExists,
  getSupportedVerticalIds,
  isSupportedVertical,
} from './vertical.js';

describe('landscaping vertical registry', () => {
  it('exposes landscaping as the only supported vertical', () => {
    expect(getSupportedVerticalIds()).toEqual([LANDSCAPING_VERTICAL_ID]);
    expect(isSupportedVertical('landscaping')).toBe(true);
    expect(isSupportedVertical('fashion-jewelry')).toBe(false);
  });

  it('assertVerticalExists returns the vertical id when supported', () => {
    expect(assertVerticalExists('landscaping')).toBe('landscaping');
  });

  it('assertVerticalExists throws for unknown verticals', () => {
    expect(() => assertVerticalExists('unknown')).toThrow(/Unknown vertical/);
  });
});
