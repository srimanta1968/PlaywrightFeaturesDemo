## About
---------------------------
This repository contains some example tests that demo [Playwright's](https://playwright.dev) capabilities/features.

These demo tests include:
- Sample examples generated by Playwright
- Device simulation (Enable one of the mobile viewports from playwright.config.ts file)
- Context isolation
- Reusable State
- API Testing
- Intercept requests
- Geo-location simulation
- Accessibility testing
- Visual regression testing (You need to a local web server serving a page on port 3000)

## Usage
---------------------------

1. Download the zip file or clone this repository.
2. Change the directory to `PlaywrightFeaturesDemo`.
```sh
cd PlaywrightFeaturesDemo
```
3. Install dependencies.
```sh
npm install
```
4. Run test(s).
```sh
npx playwright test
```