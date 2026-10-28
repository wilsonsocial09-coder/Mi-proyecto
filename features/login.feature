Feature: Login

  Scenario: TC01 Login Happy Path
    Given el usuario está en la página de login
    When inicia sesión con "customer2@practicesoftwaretesting.com" y "welcome01"
    Then debería ver su cuenta
    