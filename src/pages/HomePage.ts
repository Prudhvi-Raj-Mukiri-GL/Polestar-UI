import { Page } from "@playwright/test";
import PlaywrightActions from "../playwright/Actions";
import * as data from '../test/testdata.json'
import { locators } from "../elements/HomePage-locators";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60*1000)
export default class HomePage extends PlaywrightActions{

    page: Page
    locator: locators;

    constructor(page: Page) {
        super(page)
        this.page = page
        this.locator = new locators()
    }

    public async verifyPageTitle() {
        await this.assertTitle(data.homePageTitle)
    }

    public async verifyLandingPage(titleValue: string) {
        await this.page.waitForLoadState('load')
        await this.page.waitForTimeout(3000)
        await this.assertTitleContains(titleValue)
    }

    public async clickOnButton(buttonName: string) {
        if(buttonName.includes('Learn')) {
            await this.waitAndClick(this.locator.learnMoreButton.xpath)
        }
        else if(buttonName.includes('Available')) {
            await this.waitAndClick(this.locator.availableCarsButton.xpath)
        }
        else if(buttonName.includes('Subscribe')) {
            await this.waitAndClick(this.locator.subcribeNewsLetter.xpath)
        }
    }

    public async isButtonVisible(buttonName: string) {
        if(buttonName.includes('Learn')) {
            await this.isVisible(this.locator.learnMoreButton.xpath)
        }
        else if(buttonName.includes('Available')) {
            await this.isVisible(this.locator.availableCarsButton.xpath)
        }
        else if(buttonName.includes('newsletter')) {
            await this.isVisible(this.locator.subcribeNewsLetter.xpath)
        }
    }

}