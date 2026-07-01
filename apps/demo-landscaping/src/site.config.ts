import { defineSiteConfig } from '@supernova/site-runtime';
import { landscapingDemoContent } from '@supernova/vertical-landscaping';

export const siteConfig = defineSiteConfig({
  business: {
    legalName: 'Evergreen Grove Landscaping LLC',
    displayName: landscapingDemoContent.heroTitle,
    tagline: landscapingDemoContent.heroSubtitle,
    description:
      'Fictional demonstration landscaping business for the Supernova Site Platform. Not a real company.',
    vertical: 'landscaping',
    isDemonstration: true,
  },
  siteUrl: 'https://demo-landscaping.example.test',
  locale: 'en-US',
  themeId: 'landscaping-default',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
  ],
});
