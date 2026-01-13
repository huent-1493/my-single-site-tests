import { test, expect } from './auth';

test('admin can access dashboard', async ({ page, loginAs }) => {
  await loginAs('admin');
  await page.goto('/');
  await expect(page.getByRole('link', { name: /profile/i })).toBeVisible();
});
