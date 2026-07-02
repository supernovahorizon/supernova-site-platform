import { expect, test } from '@playwright/test';

const site = process.env.SITE ?? 'evergreen';
const serviceSlug = site === 'blue-ridge' ? 'erosion-control' : 'lawn-care';
const areaSlug = site === 'blue-ridge' ? 'highlands-ridge' : 'north-hill-district';

const criticalRoutes = [
  '/',
  '/services/',
  `/services/${serviceSlug}/`,
  '/service-areas/',
  `/service-areas/${areaSlug}/`,
  '/projects/',
  '/about/',
  '/faq/',
  '/contact/',
  '/quote/',
];

test.describe('landscaping demo smoke', () => {
  for (const route of criticalRoutes) {
    test(`renders ${route} without horizontal overflow`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'domcontentloaded' });
      await expect(page.locator('main')).toBeVisible();

      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        return doc.scrollWidth > doc.clientWidth + 2;
      });
      expect(overflow).toBe(false);
    });
  }

  test('mobile menu opens and closes with escape', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: 'Menu' });
    await menuButton.click();
    await expect(page.getByRole('navigation', { name: 'Mobile primary' })).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.getByRole('navigation', { name: 'Mobile primary' })).toBeHidden();
  });

  test('quote form completes three-step flow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/quote/');

    await page.locator('#quote-service').selectOption({ index: 1 });
    await page.locator('#quote-address').fill('412 Mossy Lane, Portland OR');
    await page.locator('[data-quote-next]').click();

    await page.locator('[data-quote-step="2"]').waitFor({ state: 'visible' });
    await page
      .locator('#quote-description')
      .fill('Looking to refresh backyard beds and add a small stone pathway near the patio area.');
    await page.locator('[data-quote-next]').click();

    await page.locator('[data-quote-step="3"]').waitFor({ state: 'visible' });
    await page.locator('#quote-name').fill('Alex Morgan');
    await page.locator('#quote-email').fill('alex@example.test');
    await page.locator('#quote-phone').fill('5035550142');
    await page.locator('#quote-consent').check();
    const submit = page.getByRole('button', { name: /send|inquiry|quote request/i });
    await expect(submit).toBeVisible();
    await submit.click();

    await expect(page.locator('#sn-quote-request-status')).not.toBeEmpty({ timeout: 10_000 });
  });

  test('before/after supports button controls', async ({ page }) => {
    await page.goto('/');
    const showBefore = page.getByRole('button', { name: 'Show before' }).first();
    if (await showBefore.count()) {
      await showBefore.click();
      await page.getByRole('button', { name: 'Show after' }).first().click();
    }
  });

  test('404 page includes navigation and quote link', async ({ page }) => {
    await page.goto('/does-not-exist/');
    await expect(page.locator('main')).toBeVisible();
    await expect(page.getByRole('link', { name: /quote|estimate|project/i }).first()).toBeVisible();
  });
});
