import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/login-page";

type MyFixtures = {
    loginPage: LoginPage;
};

export const test = baseTest.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        // Set up the fixture.
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login();

        // Use the fixture in the test.
        await use(loginPage);
    }
});

export { expect } from "@playwright/test";
