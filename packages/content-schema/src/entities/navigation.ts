import { z } from 'zod';

export const NavigationItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const NavigationSchema = z.array(NavigationItemSchema).min(1);

export type NavigationItem = z.infer<typeof NavigationItemSchema>;
