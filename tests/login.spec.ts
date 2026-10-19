import { test, expect } from '@playwright/test';

test("TC01 . Login Happy Path", async ({ page }) => {
    // Paso 1: Abrir el navegador y navegar a la página de inicio de sesión 
    await page.goto("https://practicesoftwaretesting.com/");
    // Validar que el título de la página sea correcto
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

    // Paso 2: Click en el botón de inicio de sesión
    await page.getByRole("link", { name: "Login" }).click();
    
    //Paso 3: Ingresar las credenciales de inicio de sesió
});