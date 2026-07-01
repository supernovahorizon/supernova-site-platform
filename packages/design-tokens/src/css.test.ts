import { describe, expect, it } from 'vitest';

import { tokensToCssVariables } from './css.js';
import { defaultTokens } from './tokens.js';

describe('tokensToCssVariables', () => {
  it('generates CSS custom properties from design tokens', () => {
    const css = tokensToCssVariables(defaultTokens);
    expect(css).toContain('--sn-color-accent: #2f6f4e;');
    expect(css.startsWith(':root')).toBe(true);
  });
});
