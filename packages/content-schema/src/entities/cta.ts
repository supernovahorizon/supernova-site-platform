import { z } from 'zod';

export const CallToActionSchema = z.object({
  id: z.string().min(1),
  headline: z.string().min(5).max(120),
  body: z.string().min(10).max(300),
  buttonLabel: z.string().min(2).max(40),
  buttonHref: z.string().min(1),
});

export type CallToAction = z.infer<typeof CallToActionSchema>;
