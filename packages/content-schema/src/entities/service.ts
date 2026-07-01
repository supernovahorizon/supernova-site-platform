import { z } from 'zod';

export const ServiceSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase kebab-case slugs'),
  name: z.string().min(1),
  summary: z.string().min(10).max(300),
  description: z.string().min(30).max(2000),
  heroImage: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
  }),
  benefits: z.array(z.string().min(5)).min(1).max(8),
});

export type Service = z.infer<typeof ServiceSchema>;
