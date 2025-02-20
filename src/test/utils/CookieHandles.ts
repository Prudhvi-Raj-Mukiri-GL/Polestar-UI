import { Page } from "@playwright/test"
import { locators } from "../../elements/CookieHandle-locators"
import PlaywrightActions from "../../playwright/Actions"

export default class CookieHandles extends PlaywrightActions {

    locators: locators
    page: Page

    constructor(page: Page) {
        super(page)
        this.page = page
        this.locators = new locators()
    }

    public async acceptCookie() {
        await this.waitAndClick(this.locators.acceptCookie.xpath)
    }
    
}