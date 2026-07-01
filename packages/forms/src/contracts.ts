import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  consentToContact: z.literal(true),
});

export const QuoteRequestSchema = ContactFormSchema.extend({
  serviceArea: z.string().min(1).max(120),
  projectSummary: z.string().min(10).max(2000),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
export type QuoteRequestInput = z.infer<typeof QuoteRequestSchema>;
