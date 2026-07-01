import type { BusinessIdentity } from '@supernova/content-schema';

export type LocalBusinessJsonLdInput = {
  business: BusinessIdentity;
  siteUrl: string;
};

export function createLocalBusinessJsonLd({ business, siteUrl }: LocalBusinessJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.displayName,
    description: business.description,
    url: siteUrl,
    additionalType: business.isDemonstration ? 'https://schema.org/Dataset' : undefined,
    disclaimer: business.isDemonstration
      ? 'Fictional demonstration business for the Supernova Site Platform.'
      : undefined,
  };
}
