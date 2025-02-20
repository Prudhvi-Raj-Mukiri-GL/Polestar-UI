import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";

setDefaultTimeout(60*1000)
export default class Asserts {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async assertTitle(title: string){
        await expect(this.page).toHaveTitle(title);
    }

    async assertTitleContains(title: string){
        expect(await this.page.title()).toContain(title);
    }

    async isVisible(locator: string) {
        expect(await this.page.locator(locator).isVisible())
    }

}