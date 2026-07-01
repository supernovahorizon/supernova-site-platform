import { z } from 'zod';

export const TestimonialSchema = z.object({
  id: z.string().min(1),
  quote: z.string().min(20).max(600),
  authorName: z.string().min(1),
  authorContext: z.string().min(5).max(120),
  isFictionalDemonstration: z.literal(true),
});

export type Testimonial = z.infer<typeof TestimonialSchema>;
