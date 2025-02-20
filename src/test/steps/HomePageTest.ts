import { Given, Then, When } from "@cucumber/cucumber";
import { pageData } from "../hooks/pageData";
import * as data from 'dotenv'

data.config()

//Background
Given('User should navigate to url', async function () {
    await pageData.homePageInstance.navigate(process.env.url)
});

Given('User should handle cookies', async function () {
    await pageData.cookieInstance.acceptCookie()
});

//Scenarios
Given('User should be on home page', async function () {
    await pageData.homePageInstance.verifyPageTitle()
});

Given('Able to see {string} button', async function (string) {
    await pageData.homePageInstance.isButtonVisible(string)
});

When('User click on the {string} button', async function (string) {
    await pageData.homePageInstance.clickOnButton(string)
});

Then('User should redirect to {string} page', async function (string) {
    await pageData.homePageInstance.verifyLandingPage(string)
});