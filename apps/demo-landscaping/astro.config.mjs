import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://demo-landscaping.example.test',
  vite: {
    ssr: {
      noExternal: [/^@supernova\//],
    },
  },
});
