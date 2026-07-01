import { z } from 'zod';

export const SocialProfilesSchema = z.object({
  instagram: z.string().url().optional(),
  facebook: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  youtube: z.string().url().optional(),
});

export type SocialProfiles = z.infer<typeof SocialProfilesSchema>;
