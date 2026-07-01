export type ImageAsset = {
  src: string;
  alt: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type ServiceCardItem = {
  slug: string;
  name: string;
  summary: string;
  href?: string;
};

export type ServiceAreaListItem = {
  slug: string;
  name: string;
  regionLabel: string;
  summary: string;
  href?: string;
};

export type TestimonialItem = {
  id: string;
  quote: string;
  authorName: string;
  authorContext: string;
  isFictionalDemonstration?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProjectGalleryItem = {
  slug: string;
  title: string;
  summary: string;
  image: ImageAsset;
  completedLabel: string;
  href?: string;
};

export type BeforeAfterItem = {
  slug: string;
  title: string;
  summary: string;
  beforeImage: ImageAsset;
  afterImage: ImageAsset;
};

export type PostalAddress = {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country?: string;
};

export type ContactInfoProps = {
  phone: string;
  email: string;
  address: PostalAddress;
  mapEmbedUrl?: string;
};

export type DayHours = {
  open: string;
  close: string;
};

export type BusinessHoursProps = {
  monday?: DayHours;
  tuesday?: DayHours;
  wednesday?: DayHours;
  thursday?: DayHours;
  friday?: DayHours;
  saturday?: DayHours;
  sunday?: DayHours;
  notes?: string;
};

export type PreferredContactMethod = 'email' | 'phone' | 'either';

export const QUOTE_REQUEST_FIELD_NAMES = [
  'name',
  'email',
  'phone',
  'requestedService',
  'serviceAddressOrZip',
  'preferredContactMethod',
  'projectDescription',
  'budgetRange',
  'consentAcknowledgment',
  'honeypot',
] as const;

export type QuoteRequestFieldName = (typeof QUOTE_REQUEST_FIELD_NAMES)[number];

export type QuoteRequestFormSectionProps = {
  heading?: string;
  intro?: string;
  submitLabel: string;
  successMessage: string;
  privacyPolicyHref: string;
  privacyPolicyLabel?: string;
  services: string[];
  budgetRanges?: string[];
  formAction?: string;
  staticSubmissionNote?: string;
  preferredContactMethods?: PreferredContactMethod[];
};

export const DEFAULT_FICTIONAL_DEMONSTRATION_LABEL = 'Fictional demonstration testimonial';

export const DEFAULT_DEMO_BANNER_MESSAGE =
  'Demonstration business — fictional content for platform evaluation only.';

export const BUSINESS_HOUR_DAY_KEYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const;

export type BusinessHourDayKey = (typeof BUSINESS_HOUR_DAY_KEYS)[number];

export const BUSINESS_HOUR_DAY_LABELS: Record<BusinessHourDayKey, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
};

export function normalizeNavigationItems(items: NavigationItem[]): NavigationItem[] {
  return items.filter((item) => item.label.trim().length > 0 && item.href.trim().length > 0);
}

export function resolveServiceHref(
  service: Pick<ServiceCardItem, 'slug' | 'href'>,
  basePath = '/services',
): string {
  return service.href ?? `${basePath}/${service.slug}`;
}

export function resolveServiceAreaHref(
  area: Pick<ServiceAreaListItem, 'slug' | 'href'>,
  basePath = '/service-areas',
): string {
  return area.href ?? `${basePath}/${area.slug}`;
}

export function resolveProjectHref(
  project: Pick<ProjectGalleryItem, 'slug' | 'href'>,
  basePath = '/projects',
): string {
  return project.href ?? `${basePath}/${project.slug}`;
}

export function requiresFictionalDemonstrationLabel(testimonials: TestimonialItem[]): boolean {
  return testimonials.some((testimonial) => testimonial.isFictionalDemonstration === true);
}

export function getFictionalDemonstrationLabel(
  isFictionalDemonstration: boolean | undefined,
  label = DEFAULT_FICTIONAL_DEMONSTRATION_LABEL,
): string | null {
  return isFictionalDemonstration ? label : null;
}

export function formatDayHours(hours: DayHours | undefined, closedLabel = 'Closed'): string {
  if (!hours) {
    return closedLabel;
  }

  return `${hours.open} – ${hours.close}`;
}

export function formatPostalAddress(address: PostalAddress): string {
  const country = address.country?.trim();
  const locality = `${address.city}, ${address.region} ${address.postalCode}`;

  return country ? `${address.street}, ${locality}, ${country}` : `${address.street}, ${locality}`;
}

export function validateBreadcrumbTrail(items: BreadcrumbItem[]): BreadcrumbItem[] {
  if (items.length === 0) {
    throw new Error('Breadcrumbs require at least one item.');
  }

  return items.map((item, index) => {
    const isLast = index === items.length - 1;

    if (isLast && item.href) {
      return { label: item.label };
    }

    if (!isLast && !item.href) {
      throw new Error(`Breadcrumb item "${item.label}" requires an href.`);
    }

    return item;
  });
}

export function assertQuoteRequestFieldCoverage(fieldNames: readonly string[]): void {
  const missing = QUOTE_REQUEST_FIELD_NAMES.filter((name) => !fieldNames.includes(name));

  if (missing.length > 0) {
    throw new Error(`Quote request form is missing fields: ${missing.join(', ')}`);
  }
}

export function getQuoteRequestInputNames(): QuoteRequestFieldName[] {
  return [...QUOTE_REQUEST_FIELD_NAMES];
}
