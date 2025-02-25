const { test, expect } = require("@playwright/test")
import { Page } from "@playwright/test"
import { locators } from "../elements/polestar4Menu-locators"
import { pageData } from "../test/hooks/pageData";
import PlaywrightActions from "../playwright/Actions";


export default class Polestar4MenuPage extends PlaywrightActions {
    locator: locators;
    polestar4Menu: any
    DiscoverPoleStar4: any
    PerformancePanel: any
    TextinPerformancePanel: any

    constructor(page) {
        super(pageData.page)
        this.page = page;
        this.locator = new locators();
    }

    async verifyPolestar4MenuOption() {
        await this.waitAndClick(this.locator.polestar4Menu.xpath);
    }

    async HoverOnDiscoverPoleStar4() {
        await this.page.locator(this.locator.DiscoverPoleStar4.xpath).click();
    }

    async VerifyTextinPerformancePanel() {
        await expect(this.page.locator(this.locator.TextinPolestar4MenuPanel.xpath)).toBeVisible()
    }

}