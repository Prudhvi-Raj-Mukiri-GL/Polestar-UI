import { Page } from "@playwright/test";
import Asserts from "./Assert";

export default class PlaywrightActions extends Asserts {
    page: Page;

    constructor(page: Page) {
        super(page)
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url)
    }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }
        
}