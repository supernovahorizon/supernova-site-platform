import { z } from 'zod';

export const FaqItemSchema = z.object({
  question: z.string().min(5),
  answer: z.string().min(10).max(1200),
});

export type FaqItem = z.infer<typeof FaqItemSchema>;
