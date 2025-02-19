import { Page } from "@playwright/test"
import PlaywrightActions from "../playwright/Actions";
import { Locators } from "../elements/NewsSubcribePage-Locators"

export default class NewsSubcribePage extends PlaywrightActions {
    page: Page
    locators: Locators

    constructor(page: Page) {
        super(page)
        this.page = page
        this.locators = new Locators()
    }

    async fillDetailsForNewsSubcription(firstname: string, lastname: string, email: string, postnumber: string) {
            await this.fillValueForTextField(this.page, this.locators.firstname.xpath, firstname)
            await this.fillValueForTextField(this.page, this.locators.lastname.xpath, lastname)
            await this.fillValueForTextField(this.page, this.locators.email.xpath, email)
            await this.fillValueForTextField(this.page, this.locators.postcode.xpath, postnumber)
    }

    async clickOnCheckBoxAndSubmitButton(buttonName: string) {
        await this.clickOnLocator(this.page, this.locators.checkbox.xpath)
        if(this.locators.submit.xpath.includes(buttonName)) {
            await this.clickOnLocator(this.page, this.locators.submit.xpath)
        } else {
            throw new Error(`Can't find the element with name: ${buttonName}`)
        }
    }

    async verifySuccessMessageOfSubcription(message: string) {
        if(this.locators.subcriptionConfirmationMessage.xpath.includes(message)) {
            const isVisible = await this.isElementVisible(this.page, this.locators.subcriptionConfirmationMessage.xpath)
            return isVisible
        } else {
            throw new Error(`Can't find the element with message: ${message}`)
        }
    }
}