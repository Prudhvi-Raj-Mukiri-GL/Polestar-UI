import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber'
import { Browser, BrowserContext, chromium, Page } from '@playwright/test'
import * as data from "dotenv"
import { pageData } from './pageData'
import HomePage from '../../pages/HomePage'
import CookieHandles from '../utils/CookieHandles'
data.config()

let page: Page, browser: Browser, context: BrowserContext

BeforeAll(async ()=>{
    await setBrowser(process.env.browser)
})

Before(async ()=>{
    context = await browser.newContext()
    await context.tracing.start({screenshots: true, snapshots: true})
    page = await context.newPage()
    pageData.page = page
    pageData.homePageInstance = new HomePage(pageData.page)
    pageData.cookieInstance = new CookieHandles(pageData.page)
})

async function setBrowser(browserName: string) {
    if(browserName == 'chrome') {
        browser = await chromium.launch({headless: process.env.headless === 'true', channel:'chrome'})
    } else if(browserName == 'msedge') {
        browser = await chromium.launch({headless: process.env.headless === 'true', channel:'msedge'})
    }
}

After(async ()=>{
    await pageData.page.waitForLoadState('load')
    await context.tracing.stop({path: 'tracing/fileName.zip'})
    await pageData.page.close()
    await context.close()
})

AfterAll(async ()=>{
    await browser.close()
})