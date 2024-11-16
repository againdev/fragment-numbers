import { Browser } from "puppeteer";
import {
  getHash,
  getSortedNumbersHTML,
  openBrowser,
  openPage,
} from "./puppeteer-actions";

async function main(browser: Browser | null = null) {
  if (!browser) {
    browser = await openBrowser();
  }

  const page = await openPage(browser);
  const hash = await getHash(page);

  if (!hash) {
    throw new Error("Error getting hash!");
  }

  const circle = async () => {
    console.log(hash);
    const sortedNumbersHTML = await getSortedNumbersHTML(page, hash);
    await circle();
  };

  await circle();
}

main();
