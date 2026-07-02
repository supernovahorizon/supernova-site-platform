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
  displayName?: string;
  homeHref?: string;
  navItems: NavigationItem[];
  quoteCta?: { label: string; href: string };
  phone?: string;
  variant?: 'editorial' | 'cinematic';
  currentPath?: string;
  class?: string;
};

export type SiteFooterProps = {
  navItems?: NavigationItem[];
  copyrightLabel: string;
  tagline?: string;
  disclaimer?: string;
  variant?: 'light' | 'dark';
  class?: string;
};

export type HeroSectionProps = {
  headline: string;
  subheadline: string;
  eyebrow?: string;
  intro?: string;
  image?: { src: string; alt: string };
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'editorial' | 'cinematic';
  metrics?: Array<{ label: string; value: string }>;
  class?: string;
};

export type ServiceCardItemWithImage = ServiceCardItem & {
  heroImage?: { src: string; alt: string };
};

export type ServiceCardsSectionProps = {
  heading: string;
  intro?: string;
  services: ServiceCardItemWithImage[];
  serviceBasePath?: string;
  variant?: 'organic' | 'geometric';
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
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  variant?: 'warm' | 'bold';
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
  variant?: 'editorial' | 'grid';
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
