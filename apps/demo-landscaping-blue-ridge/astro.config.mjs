import { defineConfig } from 'astro/config';
import { blueRidgeFixture } from '@supernova/vertical-landscaping';

export default defineConfig({
  site: blueRidgeFixture.siteUrl,
  vite: {
    ssr: {
      noExternal: [/^@supernova\//],
    },
  },
});
