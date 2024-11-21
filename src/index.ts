import { Browser } from "puppeteer";
import {
  getHash,
  isBuyNumber,
  openAndBuyNumber,
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
    try {
      console.log(hash);
      const buyNumber = await isBuyNumber(page, hash);
      if (buyNumber) {
        await openAndBuyNumber(buyNumber, page);
      }
    } catch (error) {
      console.error("Error fetching hash: ", error);
    } finally {
      await circle();
    }
  };

  await circle();
}

main();
