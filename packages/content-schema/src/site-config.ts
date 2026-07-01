import { z } from 'zod';

export const BusinessIdentitySchema = z.object({
  legalName: z.string().min(1),
  displayName: z.string().min(1),
  tagline: z.string().min(1).max(160),
  description: z.string().min(1).max(500),
  vertical: z.enum(['landscaping', 'fashion-jewelry', 'generic']),
  isDemonstration: z.literal(true),
});

export const SiteConfigSchema = z.object({
  business: BusinessIdentitySchema,
  siteUrl: z.string().url(),
  locale: z.string().default('en-US'),
  themeId: z.string().min(1),
  navigation: z
    .array(
      z.object({
        label: z.string().min(1),
        href: z.string().min(1),
      }),
    )
    .min(1),
});

export type BusinessIdentity = z.infer<typeof BusinessIdentitySchema>;
export type SiteConfig = z.infer<typeof SiteConfigSchema>;
