import { z } from 'zod';

export const SeoDefaultsSchema = z.object({
  titleSuffix: z.string().min(1).max(60),
  defaultDescription: z.string().min(30).max(160),
  socialImage: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
  }),
  robots: z.enum(['index,follow', 'noindex,nofollow']).default('noindex,nofollow'),
});

export type SeoDefaults = z.infer<typeof SeoDefaultsSchema>;
