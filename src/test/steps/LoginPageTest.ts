import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test";
import { pageData } from "../hooks/pageData";
setDefaultTimeout(80 * 1000)




Given('User clicks on the Account Menu', async function () {
  await pageData.loginPageInstance.VerifyProfileMenu();
});

Given('User enters the email as {string}', async function (string) {
  await pageData.loginPageInstance.inputemailid();
});

Given('User enters the password as {string}', async function (string) {
  await pageData.loginPageInstance.inputPassword();
});


When('User clicks on the Login button', async function () {
  await pageData.loginPageInstance.Verifyloginbutton();
});

Given('User is on Account Menu Page', async function () {
  await pageData.loginPageInstance.VerifyaccountMenu();
});

Then('Login should display with the validation Message', async function () {
  await pageData.page.waitForTimeout(6000)
  await pageData.loginPageInstance.VerifyerrorValidation();
});






