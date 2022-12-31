import { expect, test } from "@playwright/test";

test('Test Gourmet website for visual regression @visual', async ({ page }) => {
    test.skip(process.env.CI != undefined, 'Skipping failing visual regression test on CI');

    await page.goto("http://localhost:3000");

    await expect(page).toHaveScreenshot({ fullPage: true });
});
