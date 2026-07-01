import type { BusinessIdentity } from '@supernova/content-schema';

export function assertDemonstrationBusiness(business: BusinessIdentity): void {
  if (!business.isDemonstration) {
    throw new Error('Expected a demonstration business identity.');
  }
}
