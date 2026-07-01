import { z } from 'zod';

export const ContactInfoSchema = z.object({
  phone: z.string().min(7).max(30),
  email: z.string().email(),
  address: z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    region: z.string().min(1),
    postalCode: z.string().min(3).max(12),
    country: z.string().min(2).default('US'),
  }),
  mapEmbedUrl: z.string().url().optional(),
});

export type ContactInfo = z.infer<typeof ContactInfoSchema>;
