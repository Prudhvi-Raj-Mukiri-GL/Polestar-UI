import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber'
import { Browser, BrowserContext, chromium, Page } from '@playwright/test'
import * as data from "dotenv"
data.config()

let page: Page, browser: Browser, context: BrowserContext

let homePage

export const pageData: any = {
    page
}

export const pagesInstance: any = {
    homePage
}

BeforeAll(async ()=>{
    await setBrowser(process.env.browser)
})

Before(async ()=>{
    context = await browser.newContext()
    context.tracing.start({screenshots: true, snapshots: true})
    page = await context.newPage()

    //homePage = new 
})

async function setBrowser(browserName: string) {
    if(browserName == 'chrome') {
        browser = await chromium.launch({headless: Boolean(process.env.headless), channel:'chrome'})
    } else if(browserName == 'msedge') {
        browser = await chromium.launch({headless: Boolean(process.env.headless), channel:'msedge'})
    }
}

After(async ()=>{
    context.tracing.stop({path: 'tracing/fileName.zip'})
    context.close()
    page.close()
})

AfterAll(()=>{
    browser.close()
})