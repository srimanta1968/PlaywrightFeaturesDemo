import { test, expect } from "../fixtures/custom-test";

test('Test My Info tab functionality @fixture', async ({ loginPage, page }) => {
    // Go to `My Info` tab.
    await page.getByRole('link', { name: 'My Info' }).click();

    await page.pause();
});

test('Test Performance tab functionality @fixture', async ({ loginPage, page }) => {
    // Go to `Performance` tab.
    await page.getByRole('link', { name: 'Performance' }).click();

    await page.pause();
});
