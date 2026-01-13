import { test, expect } from './auth';

test('user can see dashboard', async ({ page, loginAs }) => {
  await loginAs('user');
  await page.goto('/');
  await expect(page.getByRole('link', { name: /profile/i })).toBeVisible();
});
