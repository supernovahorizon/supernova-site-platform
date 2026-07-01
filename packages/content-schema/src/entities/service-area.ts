import { z } from 'zod';

export const ServiceAreaSchema = z
  .object({
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase kebab-case slugs'),
    name: z.string().min(1),
    regionLabel: z.string().min(1),
    summary: z.string().min(20).max(300),
    localIntroduction: z
      .string()
      .min(80)
      .max(1200)
      .describe('Meaningful location-specific copy; not a duplicate of the summary'),
    neighborhoods: z.array(z.string().min(2)).min(1).max(12),
    featuredServices: z.array(z.string().min(1)).min(1),
    heroImage: z.object({
      src: z.string().min(1),
      alt: z.string().min(1),
    }),
  })
  .superRefine((area, ctx) => {
    if (area.localIntroduction.trim() === area.summary.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'localIntroduction must differ from summary for service-area pages',
        path: ['localIntroduction'],
      });
    }
  });

export type ServiceArea = z.infer<typeof ServiceAreaSchema>;
