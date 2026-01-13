import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly profileLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileLink = page.locator('a:has-text("Profile")');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.page.locator('input[name="login"]').fill(email);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('button[type="submit"]', { hasText: 'Login' }).click();
  }
}
