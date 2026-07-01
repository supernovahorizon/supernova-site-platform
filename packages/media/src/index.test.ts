import { describe, expect, it } from 'vitest';

import { assertImageAsset, validateImageCollection } from './index.js';

describe('media helpers', () => {
  it('requires alt text', () => {
    expect(() => assertImageAsset({ src: '/a.svg', alt: ' ' }, 'hero')).toThrow();
  });

  it('validates image collections', () => {
    expect(() =>
      validateImageCollection([{ src: '/a.svg', alt: 'Illustration' }], 'gallery'),
    ).not.toThrow();
  });
});
