import { z } from 'zod';

export const AnalyticsConfigSchema = z.object({
  provider: z.enum(['none', 'plausible', 'ga4']).default('none'),
  siteId: z.string().optional(),
});

export type AnalyticsConfig = z.infer<typeof AnalyticsConfigSchema>;
