import path from "path";
import dotenv from "dotenv";
import puppeteer, { Browser, Page } from "puppeteer";
import {
  convertStringToHTML,
  delay,
  getFirstNumber,
  getNumberPrice,
  writeNumberPriceToFile,
} from "./utils";

dotenv.config();

export const openBrowser = async (): Promise<Browser> => {
  return await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${path.resolve("./tonkeeper")}`,
      `--load-extension=${path.resolve("./tonkeeper")}`,
      `--user-data-dir=${path.resolve("./user_data")}`,
    ],
  });
};

export const openPage = async (browser: Browser): Promise<Page> => {
  const url = process.env.URL as string;

  const page = await browser.newPage();

  await page.setViewport({
    width: 1280,
    height: 800,
  });
  await page.goto(url);

  if (!url) {
    throw new Error("BOT_LINK is not defined");
  }

  await page.goto(url, { waitUntil: "domcontentloaded" });

  return page;
};

export const getHash = async (page: Page): Promise<string | null> => {
  const forSaleButtonSelector =
    "main .btn.btn-default.dropdown-toggle.icon-after";
  const forSaleLinkSelector =
    'main .dropdown-menu-item.js-main-search-dd-item[data-value="sale"]';

  let hash = "";

  page.on("request", (request) => {
    const url = new URL(request.url());
    if (url.pathname === "/api" && url.searchParams.has("hash")) {
      hash = url.searchParams.get("hash") || "";
    }
  });

  await page.waitForSelector(forSaleButtonSelector, {
    visible: true,
    timeout: 120000,
  });
  await page.click(forSaleButtonSelector);

  await page.waitForSelector(forSaleLinkSelector, {
    visible: true,
    timeout: 10000,
  });
  await page.click(forSaleLinkSelector);

  await delay(3000);

  if (!hash) {
    throw new Error("Hash not found in intercepted requests.");
  }

  return hash;
};

export const isBuyNumber = async (
  page: Page,
  hash: string
): Promise<string | null> => {
  const apiUrl = `https://fragment.com/api?hash=${hash}`;
  const referrer = "https://fragment.com/numbers?sort=price_asc&filter=sale";
  const body =
    "type=numbers&query=&filter=sale&sort=price_asc&method=searchAuctions";

  const result = await page.evaluate(
    ({ apiUrl, referrer, body }) => {
      return fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          Referer: referrer,
        },
        body,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.ok) {
            if (data.html) {
              console.log("HTML from response:", data.html);
              return data.html;
            }
            throw new Error("HTML data is missing from the response");
          } else {
            throw new Error(
              `Server responded with an error: ${JSON.stringify(data)}`
            );
          }
        })
        .catch((error) => {
          console.error("Failed to fetch numbers array:", error);
          throw new Error(`Error while fetching numbers: ${error.message}`);
        });
    },
    { apiUrl, referrer, body }
  );

  const HTML = convertStringToHTML(result);

  const firstNumberInTable = getFirstNumber(HTML);

  const numberAndPrice = getNumberPrice(firstNumberInTable);
  writeNumberPriceToFile(numberAndPrice?.price as number);
  console.log(numberAndPrice?.number, numberAndPrice?.price);
  //TODO Написать нормальную логику прохождения
  if (numberAndPrice?.price) return numberAndPrice?.number;
  return null;
};

export const openAndBuyNumber = async (number: string, page: Page) => {
  const url = process.env.DEFAULT_URL as string;
  const numberUrl = `${url}/number/${number}`;

  await page.goto(numberUrl, { waitUntil: "domcontentloaded" });

  await page.waitForSelector(".js-buy-now-btn");
  await page.click(".js-buy-now-btn");

  await delay(30000);
};
