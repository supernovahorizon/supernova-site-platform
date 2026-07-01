import { createSiteConfig, type CreateSiteConfigInput } from '@supernova/site-config';

export type DefineSiteConfigInput = CreateSiteConfigInput;

export function defineSiteConfig(input: DefineSiteConfigInput) {
  const config = createSiteConfig(input);

  if (!config.business.isDemonstration) {
    throw new Error('Public platform demos must use demonstration business identities.');
  }

  return config;
}
