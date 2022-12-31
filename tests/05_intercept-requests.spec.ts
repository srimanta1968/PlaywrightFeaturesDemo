import { test } from "@playwright/test";

test('Block all jpg images @intercept', async ({ page }) => {
    await page.route('**/*.jpg', route => route.abort());

    await page.goto("https://www.theverge.com");

    await page.pause();
});

test('A simple ad blocker for a page @intercept', async ({ page }) => {
    // Intercept all requests, block all iframe requests.
    await page.route('**/*', route => {
        if (route.request().frame().parentFrame())
            route.abort();
        else
            route.continue();
    });

    await page.goto("https://theverge.com");

    await page.pause();
});

test('A simple ad blocker for all pages @intercept', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Intercept all requests, block all iframe requests.
    await context.route('**/*', route => {
        if (route.request().frame().parentFrame())
            route.abort();
        else
            route.continue();
    });

    await page.goto("https://theverge.com");

    await page.pause();
});
