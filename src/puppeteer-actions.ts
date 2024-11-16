import path from "path";
import dotenv from "dotenv";
import puppeteer, { Browser, ElementHandle, Frame, Page } from "puppeteer";

dotenv.config();

export const openBrowser = async (): Promise<Browser> => {
  return await puppeteer.launch({
    headless: false,
    args: [`--user-data-dir=${path.resolve("./user_data")}`],
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

export const getHash = (): Promise<string> => {
  
};
