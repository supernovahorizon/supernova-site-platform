import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  consentToContact: z.literal(true),
});

export const QuoteRequestSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(30),
  requestedService: z.string().min(1),
  serviceAddressOrZip: z.string().min(3).max(160),
  preferredContactMethod: z.enum(['email', 'phone', 'either']),
  projectDescription: z.string().min(20).max(2000),
  budgetRange: z.string().max(80).optional(),
  consentAcknowledgment: z.literal(true),
  honeypot: z.literal('').optional(),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
export type QuoteRequestInput = z.infer<typeof QuoteRequestSchema>;

export type LeadSubmissionResult =
  | { ok: true; referenceId: string }
  | { ok: false; code: 'validation' | 'spam' | 'unavailable'; message: string };

export interface LeadFormAdapter {
  submitQuoteRequest(input: QuoteRequestInput): Promise<LeadSubmissionResult>;
}
