import { z } from 'zod';

export const BeforeAfterSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  summary: z.string().min(20).max(400),
  beforeImage: z.object({ src: z.string().min(1), alt: z.string().min(1) }),
  afterImage: z.object({ src: z.string().min(1), alt: z.string().min(1) }),
});

export type BeforeAfter = z.infer<typeof BeforeAfterSchema>;
