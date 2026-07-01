import { describe, expect, it } from 'vitest';

import { fashionDemoContent } from './demo-content.js';

describe('fashionDemoContent', () => {
  it('exposes fictional demonstration collections', () => {
    expect(fashionDemoContent.collections).toHaveLength(3);
    expect(fashionDemoContent.heroSubtitle).toContain('Demonstration');
  });
});
