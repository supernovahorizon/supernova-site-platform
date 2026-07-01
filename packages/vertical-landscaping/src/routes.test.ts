import { describe, expect, it } from 'vitest';

import { blueRidgeFixture, evergreenGroveFixture, parseLandscapingSite } from './index.js';
import { getLandscapingRoutes, getSitemapPaths } from './routes.js';

describe('getLandscapingRoutes', () => {
  it('derives static routes from evergreen fixture services and areas', () => {
    const site = parseLandscapingSite(evergreenGroveFixture);
    const routes = getLandscapingRoutes(site);

    expect(routes.find((route) => route.kind === 'home')?.path).toBe('/');
    expect(routes.filter((route) => route.kind === 'service')).toHaveLength(site.services.length);
    expect(routes.filter((route) => route.kind === 'service-area')).toHaveLength(
      site.serviceAreas.length,
    );
    expect(routes.some((route) => route.path === '/quote')).toBe(true);
  });

  it('derives distinct routes for the blue ridge fixture', () => {
    const site = parseLandscapingSite(blueRidgeFixture);
    const routes = getLandscapingRoutes(site);
    const servicePaths = routes
      .filter((route) => route.kind === 'service')
      .map((route) => route.path);

    expect(servicePaths).toContain('/services/erosion-control');
    expect(servicePaths).toContain('/services/native-planting');
  });
});

describe('getSitemapPaths', () => {
  it('excludes the not-found route', () => {
    const site = parseLandscapingSite(evergreenGroveFixture);
    const paths = getSitemapPaths(site);

    expect(paths).not.toContain('/404');
    expect(paths).toContain('/services');
    expect(paths).toContain('/privacy');
  });
});
