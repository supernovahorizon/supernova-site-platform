import { SiteConfigSchema, type SiteConfig } from '@supernova/content-schema';

export type CreateSiteConfigInput = SiteConfig;

export function createSiteConfig(input: CreateSiteConfigInput): SiteConfig {
  return SiteConfigSchema.parse(input);
}
