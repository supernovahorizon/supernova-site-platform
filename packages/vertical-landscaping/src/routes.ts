import type { LandscapingSiteContent } from './landscaping-site.js';

export type LandscapingRoute =
  | { kind: 'home'; path: '/' }
  | { kind: 'services-index'; path: '/services' }
  | { kind: 'service'; path: string; slug: string }
  | { kind: 'service-areas-index'; path: '/service-areas' }
  | { kind: 'service-area'; path: string; slug: string }
  | { kind: 'about'; path: '/about' }
  | { kind: 'projects'; path: '/projects' }
  | { kind: 'faq'; path: '/faq' }
  | { kind: 'contact'; path: '/contact' }
  | { kind: 'quote'; path: '/quote' }
  | { kind: 'privacy'; path: '/privacy' }
  | { kind: 'not-found'; path: '/404' };

export function getLandscapingRoutes(site: LandscapingSiteContent): LandscapingRoute[] {
  const routes: LandscapingRoute[] = [
    { kind: 'home', path: '/' },
    { kind: 'services-index', path: '/services' },
    ...site.services.map((service) => ({
      kind: 'service' as const,
      path: `/services/${service.slug}`,
      slug: service.slug,
    })),
    { kind: 'service-areas-index', path: '/service-areas' },
    ...site.serviceAreas.map((area) => ({
      kind: 'service-area' as const,
      path: `/service-areas/${area.slug}`,
      slug: area.slug,
    })),
    { kind: 'about', path: '/about' },
    { kind: 'projects', path: '/projects' },
    { kind: 'faq', path: '/faq' },
    { kind: 'contact', path: '/contact' },
    { kind: 'quote', path: '/quote' },
    { kind: 'privacy', path: '/privacy' },
    { kind: 'not-found', path: '/404' },
  ];

  const paths = routes.map((route) => route.path);
  const duplicates = paths.filter((path, index) => paths.indexOf(path) !== index);
  if (duplicates.length > 0) {
    throw new Error(`Duplicate landscaping routes detected: ${duplicates.join(', ')}`);
  }

  return routes;
}

export function getSitemapPaths(site: LandscapingSiteContent): string[] {
  return getLandscapingRoutes(site)
    .filter((route) => route.kind !== 'not-found')
    .map((route) => route.path);
}
