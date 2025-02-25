import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import {expect } from '@playwright/test'
import { pageData } from "../hooks/pageData";

setDefaultTimeout(80 * 1000)

         Given('User clicks on the Polestar4 Menu Option', async function () {
            await pageData.page.waitForTimeout(5000)
            await pageData.polestar4MenuPageInstance.verifyPolestar4MenuOption();      
         });

 

         Given('User should Hover on the Discover Polestar {int} Option', async function (int) {
            await pageData.polestar4MenuPageInstance.HoverOnDiscoverPoleStar4();

         });

 
          Then('Then it should redirect to Polestar4Menu Panel with Polestar4Menu text', async function () {
           await pageData.polestar4MenuPageInstance.VerifyTextinPerformancePanel();
          });
