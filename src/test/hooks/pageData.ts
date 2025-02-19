import { Page } from "@playwright/test";
import HomePage from "../../pages/HomePage"
import CookieHandles from "../utils/CookieHandles";
import NewsSubcribePage from "../../pages/NewsSubcribePage";

export const pageData = {
    page: null as Page,
    homePageInstance: null as HomePage,
    cookieInstance: null as CookieHandles,
    newsSubcribePageInstance: null as NewsSubcribePage
}