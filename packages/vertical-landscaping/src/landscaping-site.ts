import { z } from 'zod';
import { ThemeConfigSchema } from './theme.js';
import {
  AnalyticsConfigSchema,
  BrandingSchema,
  BusinessHoursSchema,
  BusinessIdentitySchema,
  CallToActionSchema,
  ContactInfoSchema,
  FaqItemSchema,
  LeadFormConfigSchema,
  NavigationSchema,
  ProjectSchema,
  SeoDefaultsSchema,
  ServiceAreaSchema,
  ServiceSchema,
  SocialProfilesSchema,
  TestimonialSchema,
  BeforeAfterSchema,
  formatValidationErrors,
} from '@supernova/content-schema';

const AboutPageSchema = z.object({
  title: z.string().min(1),
  introduction: z.string().min(80),
  values: z.array(z.string().min(10)).min(1).max(6),
});

const PrivacyPageSchema = z.object({
  title: z.string().min(1),
  sections: z.array(z.object({ heading: z.string().min(1), body: z.string().min(30) })).min(1),
});

const NotFoundPageSchema = z.object({
  title: z.string().min(1),
  message: z.string().min(20),
  homeHref: z.string().default('/'),
});

export const LandscapingSiteContentSchema = z
  .object({
    siteUrl: z.string().url(),
    locale: z.string().default('en-US'),
    business: BusinessIdentitySchema,
    contact: ContactInfoSchema,
    hours: BusinessHoursSchema,
    branding: BrandingSchema,
    navigation: NavigationSchema,
    seo: SeoDefaultsSchema,
    analytics: AnalyticsConfigSchema.default({ provider: 'none' }),
    leadForm: LeadFormConfigSchema,
    social: SocialProfilesSchema.default({}),
    services: z.array(ServiceSchema).min(1),
    serviceAreas: z.array(ServiceAreaSchema).min(1),
    projects: z.array(ProjectSchema).min(1),
    beforeAfter: z.array(BeforeAfterSchema).min(1),
    testimonials: z.array(TestimonialSchema).min(1),
    faq: z.array(FaqItemSchema).min(1),
    ctas: z.array(CallToActionSchema).min(1),
    about: AboutPageSchema,
    privacy: PrivacyPageSchema,
    notFound: NotFoundPageSchema,
    theme: ThemeConfigSchema,
    home: z.object({
      heroEyebrow: z.string().min(5).optional(),
      heroHeadline: z.string().min(5),
      heroSubheadline: z.string().min(10),
      intro: z.string().min(40),
      trustItems: z.array(z.string().min(5)).min(2).max(6),
      processSteps: z
        .array(
          z.object({
            title: z.string().min(3),
            description: z.string().min(10),
          }),
        )
        .min(3)
        .max(6),
      whyChooseItems: z
        .array(
          z.object({
            title: z.string().min(3),
            description: z.string().min(20),
          }),
        )
        .min(2)
        .max(5),
      featuredComparisonSlug: z.string().min(1).optional(),
      heroMetrics: z
        .array(
          z.object({
            label: z.string().min(3),
            value: z.string().min(1),
          }),
        )
        .max(4)
        .optional(),
    }),
  })
  .superRefine((site, ctx) => {
    const serviceSlugs = new Set(site.services.map((s) => s.slug));
    for (const area of site.serviceAreas) {
      for (const slug of area.featuredServices) {
        if (!serviceSlugs.has(slug)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `service area "${area.slug}" references unknown service "${slug}"`,
            path: ['serviceAreas'],
          });
        }
      }
    }
    for (const project of site.projects) {
      if (!serviceSlugs.has(project.serviceSlug)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `project "${project.slug}" references unknown service "${project.serviceSlug}"`,
          path: ['projects'],
        });
      }
    }
  });

export type LandscapingSiteContent = z.infer<typeof LandscapingSiteContentSchema>;

export function parseLandscapingSite(input: unknown): LandscapingSiteContent {
  const result = LandscapingSiteContentSchema.safeParse(input);
  if (!result.success) {
    throw new Error(`Invalid landscaping site content:\n${formatValidationErrors(result.error)}`);
  }

  return result.data;
}
