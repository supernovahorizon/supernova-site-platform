import type { SiteConfig } from '@supernova/content-schema';

export type PageMetadataInput = {
  site: SiteConfig;
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ site, title, description, path }: PageMetadataInput) {
  const canonical = new URL(path, site.siteUrl).toString();

  return {
    title: `${title} | ${site.business.displayName}`,
    description,
    canonical,
    isDemonstration: site.business.isDemonstration,
  };
}
