import type {
  BeforeAfterItem,
  BreadcrumbItem,
  BusinessHoursProps,
  ContactInfoProps,
  FaqItem,
  NavigationItem,
  ProjectGalleryItem,
  QuoteRequestFormSectionProps,
  ServiceAreaListItem,
  ServiceCardItem,
  TestimonialItem,
} from './props.js';

export type DemoBannerProps = {
  message?: string;
  class?: string;
};

export type SiteHeaderProps = {
  logoSrc: string;
  logoAlt: string;
  homeHref?: string;
  navItems: NavigationItem[];
  class?: string;
};

export type SiteFooterProps = {
  navItems?: NavigationItem[];
  copyrightLabel: string;
  tagline?: string;
  class?: string;
};

export type HeroSectionProps = {
  headline: string;
  subheadline: string;
  intro?: string;
  image?: { src: string; alt: string };
  cta?: { label: string; href: string };
  class?: string;
};

export type ServiceCardsSectionProps = {
  heading: string;
  intro?: string;
  services: ServiceCardItem[];
  serviceBasePath?: string;
  class?: string;
};

export type ServiceAreaListingSectionProps = {
  heading: string;
  intro?: string;
  areas: ServiceAreaListItem[];
  areaBasePath?: string;
  class?: string;
};

export type CtaBannerSectionProps = {
  headline: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
  class?: string;
};

export type TestimonialsSectionProps = {
  heading: string;
  intro?: string;
  testimonials: TestimonialItem[];
  fictionalDemonstrationLabel?: string;
  class?: string;
};

export type FaqAccordionSectionProps = {
  heading: string;
  intro?: string;
  items: FaqItem[];
  class?: string;
};

export type ProjectGallerySectionProps = {
  heading: string;
  intro?: string;
  projects: ProjectGalleryItem[];
  projectBasePath?: string;
  class?: string;
};

export type BeforeAfterSectionProps = {
  heading: string;
  intro?: string;
  comparisons: BeforeAfterItem[];
  class?: string;
};

export type ContactInfoSectionProps = {
  heading: string;
  intro?: string;
  contact: ContactInfoProps;
  class?: string;
};

export type BusinessHoursSectionProps = {
  heading: string;
  intro?: string;
  hours: BusinessHoursProps;
  class?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  ariaLabel?: string;
  class?: string;
};

export type { QuoteRequestFormSectionProps };
