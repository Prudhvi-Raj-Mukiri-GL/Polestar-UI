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

    async getPageTitle(page: Page) {
        await page.waitForLoadState('load')
        await page.waitForTimeout(3000)
        let title = await page.title()
        return title
    }

    async goToUrl(page: Page, url: string) {
        await page.goto(url)
    }

    async clickOnLocator(page: Page, locatorPath: string) {
        await page.locator(locatorPath).click()
    }

    async isElementVisible(page: Page, xpath: string) {
        await page.waitForSelector(xpath, { state: 'visible' })
        const isVisible = await page.locator(xpath).isVisible()
        return isVisible
    }

    async fillValueForTextField(page: Page, locatorPath: string, text: string | number) {
        const value = String(text) // Converting value to string if it's a number
        await page.locator(locatorPath).fill(value)
    }
        
}