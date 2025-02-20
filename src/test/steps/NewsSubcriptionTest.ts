import { When, Then, Before, setDefaultTimeout } from '@cucumber/cucumber'
import {expect } from '@playwright/test'
import { pageData } from "../hooks/pageData";

setDefaultTimeout(60*1000)

When('User fill all the details like {string}, {string}, {string} and {string}', async function (firstname: string, lastname: string, email: string, postnumber: string) {
    await pageData.newsSubcribePageInstance.fillDetailsForNewsSubcription(firstname, lastname, email, postnumber)
})

When('User should check the checkbox and click on {string} button', async function (string) {
    await pageData.newsSubcribePageInstance.clickOnCheckBoxAndSubmitButton(string)
})

Then('User should verify the successful message of subcription as {string}', async function (string) {
    const successMessage = await pageData.newsSubcribePageInstance.verifySuccessMessageOfSubcription(string)
    expect(successMessage).toBeTruthy()
})
