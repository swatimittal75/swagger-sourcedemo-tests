
# Playwright Technical Test Solution

This project demonstrates a simple **test automation framework using Playwright**
covering both:

- API Testing (Swagger Petstore)
- UI Testing (Sauce Demo)

The goal is to demonstrate **test structure, design decisions, and maintainability**
within a short implementation timeframe.

---

# Setup

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

---

# Run Tests

Run all tests:
npx playwright test

To run only ui tests
npx playwright test --ui

To run only api tests
npx playwright test --api

---

# View Report

npx playwright show-report

---

# What This Demonstrates

• Separation of API and UI tests  
• Basic Page Object Model (POM)  
• Playwright request API for backend testing  
• HTML reporting  
• Maintainable folder structure

---

# Applications Tested

Swagger Petstore API  
https://petstore.swagger.io/

SauceDemo UI  
https://www.saucedemo.com/
