import { test, expect } from '@playwright/test';
import { assert } from 'node:console';

test("TC01 . Login Happy Path",async({page})=>{
    // Paso 1: Abrir la URL
    await page.goto("https://practicesoftwaretesting.com/");
    // Validar que el título de la página sea correcto
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

    // Paso 2: Click en el botón de inicio de sesión
    await page.getByTestId("nav-sign-in").click();
    // Paso 3: Ingresar las credenciales de inicio de sesión
    await page.getByTestId("email").fill("customer@practicesoftwaretesting.com");
    await page.getByTestId("password").fill("welcome01");
    // Paso 4: Clic boto Iniciar sesión
    await page.getByTestId("login-submit").click();

    // Paso 5: Validar que he llegado a la pantalla de Home
    // page-title=Mi cuenta
    await expect(page.getByTestId("page-title")).toContainText("Mi cuenta");

    // Click en Inicio
    await page.getByTestId("nav-home").click();

    // Obtener la lista al dar click en Inicio
    const itemsAntes = page.getByTestId('product-name');
    await expect(itemsAntes.first()).not.toHaveText('');
    const primerTextoInicial = await itemsAntes.first().innerText();
    console.log(primerTextoInicial);

    // Clic en ordenar ascendete
    await page.getByTestId("sort").selectOption({label:'Nombre (A - Z)'})
});
