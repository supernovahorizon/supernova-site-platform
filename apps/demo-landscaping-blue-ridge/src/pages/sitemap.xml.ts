import type { APIRoute } from 'astro';
import { buildSitemapEntries } from '@supernova/seo';
import { getSitemapPaths } from '@supernova/vertical-landscaping';

import { site } from '../site';

export const GET: APIRoute = () => {
  const entries = buildSitemapEntries(
    site.siteUrl,
    getSitemapPaths(site).map((path) => ({ path })),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
