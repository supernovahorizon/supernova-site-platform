import { describe, expect, it } from 'vitest';

import { NoopAnalyticsProvider } from './index.js';

describe('NoopAnalyticsProvider', () => {
  it('tracks events without throwing', () => {
    const provider = new NoopAnalyticsProvider();
    expect(() => provider.track({ name: 'page_view' })).not.toThrow();
  });
});
