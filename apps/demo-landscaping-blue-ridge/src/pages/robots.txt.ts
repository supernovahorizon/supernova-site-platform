import type { APIRoute } from 'astro';
import { buildRobotsTxt } from '@supernova/seo';

import { site } from '../site';

export const GET: APIRoute = () => {
  const body = buildRobotsTxt({ siteUrl: site.siteUrl, allowAll: false });

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
