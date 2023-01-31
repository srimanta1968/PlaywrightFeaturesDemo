import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly userNameBox: Locator;
    readonly passwordBox: Locator;
    readonly loginButton: Locator;

    constructor(pageFromTest: Page) {
        this.page = pageFromTest;
        this.userNameBox = pageFromTest.getByPlaceholder('Username');
        this.passwordBox = pageFromTest.getByPlaceholder('Password');
        this.loginButton = pageFromTest.getByRole("button", { name: "Login" });
    }

    async goto(): Promise<void> {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async login(): Promise<void> {
        await this.userNameBox.fill("Admin");
        await this.passwordBox.fill("admin123");
        await this.loginButton.click();
    }
}
