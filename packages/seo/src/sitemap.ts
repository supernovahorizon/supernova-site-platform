export type SitemapEntry = {
  path: string;
  lastModified?: string;
};

export function buildSitemapEntries(siteUrl: string, entries: SitemapEntry[]): string[] {
  return entries.map((entry) => {
    const loc = new URL(entry.path, siteUrl).toString();
    const lastmod = entry.lastModified ? `<lastmod>${entry.lastModified}</lastmod>` : '';
    return `<url><loc>${loc}</loc>${lastmod}</url>`;
  });
}
