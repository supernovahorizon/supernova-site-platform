import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://demo-fashion.example.test',
  vite: {
    ssr: {
      noExternal: [/^@supernova\//],
    },
  },
});
