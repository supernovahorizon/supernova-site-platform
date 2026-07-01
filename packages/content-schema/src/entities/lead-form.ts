import { z } from 'zod';

export const LeadFormConfigSchema = z.object({
  enabled: z.boolean().default(true),
  submitLabel: z.string().min(2).max(40).default('Request a quote'),
  successMessage: z.string().min(10).max(300),
  privacyPolicyHref: z.string().min(1),
  services: z.array(z.string().min(1)).min(1),
  budgetRanges: z.array(z.string().min(3)).optional(),
});

export type LeadFormConfig = z.infer<typeof LeadFormConfigSchema>;
