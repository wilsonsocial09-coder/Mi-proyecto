import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private readonly email: Locator;
  private readonly password: Locator;
  private readonly submit: Locator;
  private readonly loginError: Locator;

  constructor(private readonly page: Page) {
    this.email = page.locator('[data-test="email"]');
    this.password = page.locator('[data-test="password"]');
    this.submit = page.locator('[data-test="login-submit"]');
    this.loginError = page.locator('[data-test="login-error"]');
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/auth/login', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await expect(this.email).toBeVisible({ timeout: 30000 });
  }

  async login(user: string, pass: string) {
    // Reintenta hasta que el valor realmente quede escrito (Angular puede
    // borrar el campo si la página termina de cargar justo después)
    await expect(async () => {
      await this.email.fill(user);
      await this.password.fill(pass);
      await expect(this.email).toHaveValue(user);
      await expect(this.password).toHaveValue(pass);
    }).toPass({ timeout: 20000 });

    await this.submit.click();
  }

  async expectLoggedIn() {
    try {
      await expect(this.page).toHaveURL(/account/, { timeout: 30000 });
    } catch (e) {
      if (await this.loginError.isVisible()) {
        throw new Error(`El login fue rechazado: ${await this.loginError.innerText()}`);
      }
      throw e;
    }
  }
}