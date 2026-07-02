import { defineConfig, devices } from '@playwright/test';

const site = process.env.SITE ?? 'evergreen';
const port = site === 'blue-ridge' ? 4322 : 4321;
const appDir =
  site === 'blue-ridge' ? '../../apps/demo-landscaping-blue-ridge' : '../../apps/demo-landscaping';

export default defineConfig({
  testDir: './specs',
  fullyParallel: false,
  retries: 1,
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    trace: 'on-first-retry',
  },
  webServer: {
    command: `pnpm --dir ${appDir} preview --host 127.0.0.1 --port ${port}`,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
