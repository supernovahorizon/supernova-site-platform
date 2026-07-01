import type { LandscapingSiteContent } from './landscaping-site.js';
import { getLandscapingRoutes } from './routes.js';

export type LandscapingQualityIssue = {
  code: string;
  message: string;
  path?: string;
};

export type LandscapingQualityReport = {
  valid: boolean;
  issues: LandscapingQualityIssue[];
};

type ImageAsset = { src: string; alt: string };

function pushImageIssue(issues: LandscapingQualityIssue[], asset: ImageAsset, label: string): void {
  if (!asset.src.trim()) {
    issues.push({
      code: 'image.missing-src',
      message: `${label} is missing an image src`,
      path: label,
    });
  }

  if (!asset.alt.trim()) {
    issues.push({
      code: 'image.missing-alt',
      message: `${label} is missing image alt text`,
      path: label,
    });
  }
}

function collectImages(site: LandscapingSiteContent): Array<{ asset: ImageAsset; label: string }> {
  const images: Array<{ asset: ImageAsset; label: string }> = [
    {
      asset: { src: site.branding.logoSrc, alt: site.branding.logoAlt },
      label: 'branding.logo',
    },
    { asset: site.seo.socialImage, label: 'seo.socialImage' },
  ];

  for (const service of site.services) {
    images.push({ asset: service.heroImage, label: `services.${service.slug}.heroImage` });
  }

  for (const area of site.serviceAreas) {
    images.push({ asset: area.heroImage, label: `serviceAreas.${area.slug}.heroImage` });
  }

  for (const project of site.projects) {
    images.push({ asset: project.image, label: `projects.${project.slug}.image` });
  }

  for (const comparison of site.beforeAfter) {
    images.push({
      asset: comparison.beforeImage,
      label: `beforeAfter.${comparison.slug}.beforeImage`,
    });
    images.push({
      asset: comparison.afterImage,
      label: `beforeAfter.${comparison.slug}.afterImage`,
    });
  }

  return images;
}

function validateRouteMetadata(
  site: LandscapingSiteContent,
  issues: LandscapingQualityIssue[],
): void {
  const routes = getLandscapingRoutes(site);

  for (const route of routes) {
    switch (route.kind) {
      case 'home': {
        if (!site.home.heroHeadline.trim() || !site.seo.defaultDescription.trim()) {
          issues.push({
            code: 'metadata.home',
            message: 'Home route requires heroHeadline and seo.defaultDescription',
            path: '/',
          });
        }
        break;
      }
      case 'services-index': {
        if (!site.business.displayName.trim()) {
          issues.push({
            code: 'metadata.services-index',
            message: 'Services index requires business.displayName for metadata',
            path: '/services',
          });
        }
        break;
      }
      case 'service': {
        const service = site.services.find((entry) => entry.slug === route.slug);
        if (!service?.name.trim() || !service.description.trim()) {
          issues.push({
            code: 'metadata.service',
            message: `Service route "${route.slug}" requires name and description`,
            path: route.path,
          });
        }
        break;
      }
      case 'service-areas-index': {
        if (!site.seo.defaultDescription.trim()) {
          issues.push({
            code: 'metadata.service-areas-index',
            message: 'Service areas index requires seo.defaultDescription',
            path: '/service-areas',
          });
        }
        break;
      }
      case 'service-area': {
        const area = site.serviceAreas.find((entry) => entry.slug === route.slug);
        if (!area?.name.trim() || !area.localIntroduction.trim()) {
          issues.push({
            code: 'metadata.service-area',
            message: `Service area route "${route.slug}" requires name and localIntroduction`,
            path: route.path,
          });
        }
        break;
      }
      case 'about': {
        if (!site.about.title.trim() || !site.about.introduction.trim()) {
          issues.push({
            code: 'metadata.about',
            message: 'About route requires title and introduction',
            path: '/about',
          });
        }
        break;
      }
      case 'projects': {
        if (site.projects.length === 0) {
          issues.push({
            code: 'metadata.projects',
            message: 'Projects route requires at least one project',
            path: '/projects',
          });
        }
        break;
      }
      case 'faq': {
        if (site.faq.length === 0) {
          issues.push({
            code: 'metadata.faq',
            message: 'FAQ route requires at least one FAQ item',
            path: '/faq',
          });
        }
        break;
      }
      case 'contact': {
        if (!site.contact.email.trim() || !site.contact.phone.trim()) {
          issues.push({
            code: 'metadata.contact',
            message: 'Contact route requires phone and email',
            path: '/contact',
          });
        }
        break;
      }
      case 'quote': {
        if (!site.leadForm.successMessage.trim() || site.leadForm.services.length === 0) {
          issues.push({
            code: 'metadata.quote',
            message: 'Quote route requires leadForm.successMessage and services',
            path: '/quote',
          });
        }
        break;
      }
      case 'privacy': {
        if (!site.privacy.title.trim() || site.privacy.sections.length === 0) {
          issues.push({
            code: 'metadata.privacy',
            message: 'Privacy route requires title and sections',
            path: '/privacy',
          });
        }
        break;
      }
      case 'not-found': {
        if (!site.notFound.title.trim() || !site.notFound.message.trim()) {
          issues.push({
            code: 'metadata.not-found',
            message: 'Not-found route requires title and message',
            path: '/404',
          });
        }
        break;
      }
      default: {
        const exhaustive: never = route;
        issues.push({
          code: 'metadata.unknown-route',
          message: `Unhandled route kind: ${String(exhaustive)}`,
        });
      }
    }
  }
}

function validateStructuredDataBasics(
  site: LandscapingSiteContent,
  issues: LandscapingQualityIssue[],
): void {
  if (!site.business.displayName.trim() || !site.business.description.trim()) {
    issues.push({
      code: 'structured-data.business',
      message: 'LocalBusiness structured data requires business displayName and description',
      path: 'business',
    });
  }

  if (!site.siteUrl.trim()) {
    issues.push({
      code: 'structured-data.site-url',
      message: 'Structured data requires a siteUrl',
      path: 'siteUrl',
    });
  }

  for (const service of site.services) {
    if (!service.name.trim() || !service.description.trim()) {
      issues.push({
        code: 'structured-data.service',
        message: `Service "${service.slug}" requires name and description for Service JSON-LD`,
        path: `services.${service.slug}`,
      });
    }
  }

  if (site.faq.some((item) => !item.question.trim() || !item.answer.trim())) {
    issues.push({
      code: 'structured-data.faq',
      message: 'FAQ structured data requires non-empty question and answer pairs',
      path: 'faq',
    });
  }

  for (const testimonial of site.testimonials) {
    if (!testimonial.isFictionalDemonstration) {
      issues.push({
        code: 'structured-data.testimonial',
        message: `Testimonial "${testimonial.id}" must be marked isFictionalDemonstration: true in demos`,
        path: `testimonials.${testimonial.id}`,
      });
    }
  }
}

export function validateLandscapingSiteQuality(
  site: LandscapingSiteContent,
): LandscapingQualityReport {
  const issues: LandscapingQualityIssue[] = [];

  for (const { asset, label } of collectImages(site)) {
    pushImageIssue(issues, asset, label);
  }

  if (!site.branding.logoAlt.trim()) {
    issues.push({
      code: 'image.missing-alt',
      message: 'branding.logoAlt is required',
      path: 'branding.logoAlt',
    });
  }

  let routes: ReturnType<typeof getLandscapingRoutes>;
  try {
    routes = getLandscapingRoutes(site);
  } catch (error) {
    issues.push({
      code: 'routes.duplicate-paths',
      message: error instanceof Error ? error.message : 'Duplicate landscaping routes detected',
      path: 'routes',
    });
    routes = [];
  }

  const paths = routes.map((route) => route.path);
  const duplicates = paths.filter((path, index) => paths.indexOf(path) !== index);
  if (duplicates.length > 0) {
    issues.push({
      code: 'routes.duplicate-paths',
      message: `Duplicate landscaping routes detected: ${[...new Set(duplicates)].join(', ')}`,
      path: 'routes',
    });
  }

  validateRouteMetadata(site, issues);
  validateStructuredDataBasics(site, issues);

  return {
    valid: issues.length === 0,
    issues,
  };
}
