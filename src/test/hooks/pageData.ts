import { Page } from "@playwright/test";
import HomePage from "../../pages/HomePage";
import CookieHandles from "../utils/CookieHandles";
import NewsSubcribePage from "../../pages/NewsSubcribePage";
import Polestar3MenuPage from "../../pages/polestar3MenuPage";
import LoginPage from "../../pages/LoginPage";
import Polestar4MenuPage from "../../pages/polestar4MenuPage";

export const pageData = {
    page: null as Page,
    homePageInstance: null as HomePage,
    cookieInstance: null as CookieHandles,
    loginPageInstance: null as LoginPage,
    newsSubcribePageInstance: null as NewsSubcribePage,
    polestar3MenuPageInstance: null as Polestar3MenuPage,
    polestar4MenuPageInstance: null as Polestar4MenuPage

}