import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

Given('el usuario está en la página de login', async function (this: CustomWorld) {
  await new LoginPage(this.page).goto();
});

When('inicia sesión con {string} y {string}', async function (this: CustomWorld, user: string, pass: string) {
  await new LoginPage(this.page).login(user, pass);
});

Then('debería ver su cuenta', async function (this: CustomWorld) {
  await new LoginPage(this.page).expectLoggedIn();
});