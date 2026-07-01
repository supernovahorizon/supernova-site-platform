import { describe, expect, it } from 'vitest';

import { reducedMotionCss } from './index.js';

describe('reducedMotionCss', () => {
  it('includes prefers-reduced-motion media query', () => {
    expect(reducedMotionCss).toContain('prefers-reduced-motion: reduce');
  });
});
