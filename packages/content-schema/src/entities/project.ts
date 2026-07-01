import { z } from 'zod';

export const ProjectSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  summary: z.string().min(20).max(400),
  serviceSlug: z.string().min(1),
  image: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
  }),
  completedLabel: z.string().min(4).max(40),
});

export type Project = z.infer<typeof ProjectSchema>;
