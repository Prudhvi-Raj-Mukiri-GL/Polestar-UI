import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from '@playwright/test'
import { pageData } from "../hooks/pageData";

setDefaultTimeout(80 * 1000)

Given('User clicks on the Polestar3 Menu Option', async function () {
  await pageData.page.waitForTimeout(5000)
  await pageData.polestar3MenuPageInstance.verifyPolestar3MenuOption();
});

Given('User should Hover on the Test Drive Option', async function () {
  await pageData.polestar3MenuPageInstance.verifyHover();
});

Then('Then it should redirect to Book your test Drive Screen', async function () {
  await pageData.page.waitForTimeout(8000)
  await pageData.polestar3MenuPageInstance.VerifyTestDriveText();
});
