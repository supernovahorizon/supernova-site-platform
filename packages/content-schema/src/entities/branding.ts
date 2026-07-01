import { z } from 'zod';

export const BrandingSchema = z.object({
  logoSrc: z.string().min(1),
  logoAlt: z.string().min(1),
  faviconSrc: z.string().min(1).optional(),
  primaryColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  accentColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  fontFamily: z.enum(['system', 'serif', 'rounded']).default('system'),
});

export type Branding = z.infer<typeof BrandingSchema>;
