export function createServiceJsonLd(input: {
  name: string;
  description: string;
  providerName: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    provider: {
      '@type': 'LocalBusiness',
      name: input.providerName,
    },
    ...(input.areaServed ? { areaServed: input.areaServed } : {}),
  };
}
