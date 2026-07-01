import { describe, expect, it } from 'vitest';

import { landscapingDemoContent } from './demo-content.js';

describe('landscapingDemoContent', () => {
  it('exposes fictional demonstration services', () => {
    expect(landscapingDemoContent.services).toHaveLength(3);
    expect(landscapingDemoContent.heroSubtitle).toContain('Demonstration');
  });
});
