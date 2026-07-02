import { z } from 'zod';

export const ThemeConfigSchema = z.object({
  id: z.enum(['evergreen-grove', 'blue-ridge']),
  navigationVariant: z.enum(['editorial', 'cinematic']).default('editorial'),
  heroVariant: z.enum(['editorial', 'cinematic']).default('editorial'),
  serviceCardVariant: z.enum(['organic', 'geometric']).default('organic'),
  projectGalleryVariant: z.enum(['editorial', 'grid']).default('editorial'),
  ctaVariant: z.enum(['warm', 'bold']).default('warm'),
  footerVariant: z.enum(['light', 'dark']).default('light'),
  sectionOrder: z
    .array(
      z.enum([
        'hero',
        'trust',
        'services',
        'featured',
        'projects',
        'process',
        'why',
        'testimonials',
        'areas',
        'cta',
      ]),
    )
    .min(1),
});

export type ThemeConfig = z.infer<typeof ThemeConfigSchema>;

export type ThemeTokens = {
  color: {
    background: string;
    surface: string;
    surfaceElevated: string;
    text: string;
    textMuted: string;
    primary: string;
    accent: string;
    accentContrast: string;
    border: string;
    overlay: string;
  };
  font: {
    body: string;
    display: string;
    heading: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    pill: string;
  };
  shadow: {
    sm: string;
    md: string;
    lg: string;
  };
};

export const evergreenGroveTheme: ThemeConfig = {
  id: 'evergreen-grove',
  navigationVariant: 'editorial',
  heroVariant: 'editorial',
  serviceCardVariant: 'organic',
  projectGalleryVariant: 'editorial',
  ctaVariant: 'warm',
  footerVariant: 'light',
  sectionOrder: [
    'hero',
    'trust',
    'services',
    'featured',
    'projects',
    'process',
    'why',
    'testimonials',
    'areas',
    'cta',
  ],
};

export const blueRidgeTheme: ThemeConfig = {
  id: 'blue-ridge',
  navigationVariant: 'cinematic',
  heroVariant: 'cinematic',
  serviceCardVariant: 'geometric',
  projectGalleryVariant: 'grid',
  ctaVariant: 'bold',
  footerVariant: 'dark',
  sectionOrder: [
    'hero',
    'trust',
    'services',
    'featured',
    'projects',
    'process',
    'why',
    'testimonials',
    'areas',
    'cta',
  ],
};

export const evergreenGroveTokens: ThemeTokens = {
  color: {
    background: '#faf7f2',
    surface: '#ffffff',
    surfaceElevated: '#f3efe8',
    text: '#11241a',
    textMuted: '#42564c',
    primary: '#244c35',
    accent: '#d46a43',
    accentContrast: '#ffffff',
    border: '#e3dacd',
    overlay: 'rgb(17 36 26 / 45%)',
  },
  font: {
    body: '"Source Sans 3", system-ui, -apple-system, "Segoe UI", sans-serif',
    display: '"Fraunces", Georgia, "Times New Roman", serif',
    heading: '"Fraunces", Georgia, "Times New Roman", serif',
  },
  radius: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.25rem',
    pill: '999px',
  },
  shadow: {
    sm: '0 2px 6px rgb(17 36 26 / 4%)',
    md: '0 10px 30px rgb(17 36 26 / 6%)',
    lg: '0 20px 50px rgb(17 36 26 / 10%)',
  },
};

export const blueRidgeTokens: ThemeTokens = {
  color: {
    background: '#0b0f13',
    surface: '#131a22',
    surfaceElevated: '#1b242f',
    text: '#e8edf2',
    textMuted: '#8b9ba8',
    primary: '#2e5775',
    accent: '#3a8ecf',
    accentContrast: '#ffffff',
    border: '#202c3a',
    overlay: 'rgb(5 8 11 / 68%)',
  },
  font: {
    body: '"DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif',
    display: '"DM Sans", system-ui, sans-serif',
    heading: '"DM Sans", system-ui, sans-serif',
  },
  radius: {
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.375rem',
    xl: '0.5rem',
    pill: '999px',
  },
  shadow: {
    sm: '0 2px 4px rgb(0 0 0 / 40%)',
    md: '0 16px 40px rgb(0 0 0 / 55%)',
    lg: '0 32px 80px rgb(0 0 0 / 70%)',
  },
};


export function getThemeTokens(themeId: ThemeConfig['id']): ThemeTokens {
  return themeId === 'blue-ridge' ? blueRidgeTokens : evergreenGroveTokens;
}

export function themeTokensToCss(tokens: ThemeTokens): string {
  return `:root {
  --sn-space-xs: 0.5rem;
  --sn-space-sm: 0.75rem;
  --sn-space-md: 1rem;
  --sn-space-lg: 1.5rem;
  --sn-space-xl: 2.5rem;
  --sn-color-background: ${tokens.color.background};
  --sn-color-surface: ${tokens.color.surface};
  --sn-color-surface-elevated: ${tokens.color.surfaceElevated};
  --sn-color-text: ${tokens.color.text};
  --sn-color-text-muted: ${tokens.color.textMuted};
  --sn-color-primary: ${tokens.color.primary};
  --sn-color-accent: ${tokens.color.accent};
  --sn-color-accent-contrast: ${tokens.color.accentContrast};
  --sn-color-border: ${tokens.color.border};
  --sn-color-overlay: ${tokens.color.overlay};
  --sn-font-body: ${tokens.font.body};
  --sn-font-display: ${tokens.font.display};
  --sn-font-heading: ${tokens.font.heading};
  --sn-radius-sm: ${tokens.radius.sm};
  --sn-radius-md: ${tokens.radius.md};
  --sn-radius-lg: ${tokens.radius.lg};
  --sn-radius-xl: ${tokens.radius.xl};
  --sn-radius-pill: ${tokens.radius.pill};
  --sn-shadow-sm: ${tokens.shadow.sm};
  --sn-shadow-md: ${tokens.shadow.md};
  --sn-shadow-lg: ${tokens.shadow.lg};
}`;
}

export function getGoogleFontsUrl(themeId: ThemeConfig['id']): string {
  if (themeId === 'blue-ridge') {
    return 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap';
  }
  return 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap';
}
