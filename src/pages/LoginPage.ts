import { Page, expect } from "@playwright/test";
import PlaywrightActions from "../playwright/Actions";
import * as data from '../test/testdata.json'
import { locators } from "../elements/login-locators";
import { setDefaultTimeout } from "@cucumber/cucumber";
import { TIMEOUT } from "dns";

setDefaultTimeout(60*1000)
export default class LoginPage extends PlaywrightActions{

    page: Page
    locator: locators;

    constructor(page: Page) {
        super(page)
        this.page = page
        this.locator = new locators()
    }

    // async verifyAcceptAllCookies() {
    //     await expect(await this.acceptCookies)
    //   }
    
      async VerifyProfileMenu() {
        await this.waitAndClick(this.locator.profileMenu.xpath)
      }
    
      async inputemailid() {
        await this.page.locator(this.locator.email.xpath).fill(data.email)
      }
    
      async inputPassword() {
        await this.page.locator(this.locator.password.xpath).fill(data.password)
      //  await this.page.pause();

      }
    
      async Verifyloginbutton() {
        await this.waitAndClick(this.locator.loginbutton.xpath)
        // await this.page.waitForTimeout(6000)
        // await this.page.pause();
      }
    
      async VerifyerrorValidation() {
        await expect(await this.page.locator(this.locator.errorValidation.xpath)).toBeVisible();
      }

      async VerifyaccountMenu(){
        await this.page.locator(this.locator.accountmenu.xpath).isDisabled();
      }

      async clickLoginButton(){
        await this.page.locator(this.locator.clickLoginButton.xpath).isDisabled();
      }


    
    }
    