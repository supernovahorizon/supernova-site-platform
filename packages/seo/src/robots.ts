export type RobotsTxtOptions = {
  siteUrl: string;
  allowAll?: boolean;
};

export function buildRobotsTxt({ siteUrl, allowAll = true }: RobotsTxtOptions): string {
  const directive = allowAll ? 'Allow: /' : 'Disallow: /';
  return `User-agent: *\n${directive}\nSitemap: ${new URL('/sitemap.xml', siteUrl).toString()}\n`;
}
