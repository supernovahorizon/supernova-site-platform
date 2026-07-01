import { defineSiteConfig } from '@supernova/site-runtime';
import { fashionDemoContent } from '@supernova/vertical-fashion';

export const siteConfig = defineSiteConfig({
  business: {
    legalName: 'Lumen Atelier LLC',
    displayName: fashionDemoContent.heroTitle,
    tagline: fashionDemoContent.heroSubtitle,
    description:
      'Fictional demonstration fashion and jewelry studio for the Supernova Site Platform. Not a real business.',
    vertical: 'fashion-jewelry',
    isDemonstration: true,
  },
  siteUrl: 'https://demo-fashion.example.test',
  locale: 'en-US',
  themeId: 'fashion-default',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '#collections' },
  ],
});
