import { After, AfterAll, Before, BeforeAll, Status } from '@cucumber/cucumber'
import { Browser, BrowserContext, chromium, Page } from '@playwright/test'
import * as data from "dotenv"
import { pageData } from './pageData'
import HomePage from '../../pages/HomePage'
import CookieHandles from '../utils/CookieHandles'
import path = require('path')
import logger from '../../utils/logger'
import LoginPage from '../../pages/LoginPage'
import NewsSubcribePage from '../../pages/NewsSubcribePage'
import Polestar3MenuPage from '../../pages/polestar3MenuPage'
import Polestar4MenuPage from '../../pages/polestar4MenuPage'
data.config()

let page: Page, browser: Browser, context: BrowserContext
let timeStamp: string

BeforeAll(async ()=>{
    logger.info("Setting up the browser")
    await setBrowser(process.env.browser)
    logger.debug("Completed the browser setup")

})

Before(async ()=>{
    context = await browser.newContext()
    await context.tracing.start({screenshots: true, snapshots: true})
    page = await context.newPage()
    pageData.page = page
    pageData.homePageInstance = new HomePage(pageData.page)
    pageData.cookieInstance = new CookieHandles(pageData.page)
    pageData.loginPageInstance = new LoginPage(pageData.page)
    pageData.newsSubcribePageInstance = new NewsSubcribePage(pageData.page)
    pageData.polestar3MenuPageInstance = new Polestar3MenuPage(pageData.page)
    pageData.polestar4MenuPageInstance = new Polestar4MenuPage(pageData.page)

})

async function setBrowser(browserName: string) {
    try {
        if(browserName == 'chrome') {
            logger.info("Setting up the chrome browser")
            browser = await chromium.launch({headless: process.env.headless === 'true', channel:'chrome'})
            logger.debug("Completed the chrome browser setup")
        } else if(browserName == 'msedge') {
            logger.info("Setting up the edge browser")
            browser = await chromium.launch({headless: process.env.headless === 'true', channel:'msedge'})
            logger.debug("Completed the edge browser setup")
        }
    }
    catch(e) {
        logger.error("Failed to create the browser with: "+e.message)
    }
}

After(async ({pickle, result})=>{
    await pageData.page.waitForLoadState('load')
    timeStamp = new Date().toISOString().replaceAll(/[:.-]/g, "_")
    if(result.status == Status.FAILED) {
        await pageData.page.screenshot({path: `results/screenshots/${pickle.name}-${timeStamp}.png`, type: 'png'})
    }
    await context.tracing.stop({path: `tracing/${timeStamp}-trace.zip`})
    await pageData.page.close()
    await context.close()
})

AfterAll(async ()=>{
    await browser.close()
})