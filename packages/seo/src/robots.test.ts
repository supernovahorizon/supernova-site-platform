import { describe, expect, it } from 'vitest';

import { buildRobotsTxt } from './robots.js';

describe('buildRobotsTxt', () => {
  it('includes a sitemap reference', () => {
    const robots = buildRobotsTxt({ siteUrl: 'https://demo.example.test' });
    expect(robots).toContain('Sitemap: https://demo.example.test/sitemap.xml');
  });
});
