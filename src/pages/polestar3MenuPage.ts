const { test, expect } = require("@playwright/test")
import { Page } from "@playwright/test"
import { locators } from "../elements/polestar3Menu-locator";
import { pageData } from "../test/hooks/pageData";
import PlaywrightActions from "../playwright/Actions";


export default class Polestar3MenuPage extends PlaywrightActions {
    locator: locators;
    polestar3Menu: any
    HoveronTestDrive: any
    TestDriveText: any

    constructor(page) {
        super(pageData.page)
        this.page = page;
        this.locator = new locators();
    }

    async verifyPolestar3MenuOption() {
        await this.waitAndClick(this.locator.polestar3Menu.xpath);
    }

    async verifyHover() {
        await this.waitAndClick(this.locator.HoveronTestDrive.xpath);
    }

    async VerifyTestDriveText() {
        await expect(this.page.locator(this.locator.TestDriveText.xpath)).toBeVisible()
    }


}

