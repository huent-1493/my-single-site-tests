import { test as base, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

type Role = 'admin' | 'user';

type AuthFixtures = {
  loginAs: (role: Role) => Promise<void>;
};

export const test = base.extend<AuthFixtures>({
  loginAs: async ({ page }, use) => {
    await use(async (role: Role) => {
      const env = process.env;
      const creds = {
        admin: {
          email: env.ADMIN_EMAIL || 'Hue1',
          password: env.ADMIN_PASSWORD || 'Aa@123456',
        },
        user: {
          email: env.USER_EMAIL || 'Hue1',
          password: env.USER_PASSWORD || 'Aa@123456',
        },
      } as const;

      const { email, password } = creds[role];
      const login = new LoginPage(page);
      await login.goto();
      await login.login(email, password);
      await expect(login.profileLink).toBeVisible();
    });
  },
});

export { expect };
