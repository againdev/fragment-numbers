import { Browser } from "puppeteer";
import { getOnSaleNumbers } from "./fetch";
import { openBrowser, openPage } from "./puppeteer-actions";

async function main(browser: Browser | null = null) {
  if (!browser) {
    browser = await openBrowser();
  }

  const page = await openPage(browser);
}

main();
