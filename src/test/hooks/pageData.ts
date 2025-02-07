import { Page } from "@playwright/test";
import HomePage from "../../pages/HomePage"
import CookieHandles from "../utils/CookieHandles";

export const pageData = {
    page: null as Page,
    homePageInstance: null as HomePage,
    cookieInstance: null as CookieHandles
}