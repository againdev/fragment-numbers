import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const convertStringToHTML = (strHTML: string): HTMLElement => {
  const dom = new JSDOM(strHTML);
  return dom.window.document.body as HTMLElement;
};

export const getFirstNumber = (HTML: HTMLElement): string | undefined => {
  const table = HTML.querySelector("table");

  if (table) {
    const tbody = table.querySelector("tbody");
    if (tbody) {
      const firstRow = tbody.querySelector("tr");
      return firstRow?.outerHTML;
    } else {
      return "Тело таблицы (tbody) не найдено";
    }
  } else {
    return "Таблица не найдена";
  }
};

export const getNumberPrice = (numberString: string = ""): number | null => {
  const { document } = new JSDOM(numberString).window;
  const priceElement = document.querySelector(
    ".table-cell-value.tm-value.icon-before.icon-ton"
  );

  if (priceElement) {
    const priceText = priceElement.textContent?.trim();
    return priceText && !isNaN(Number(priceText)) ? Number(priceText) : null;
  } else {
    return null;
  }
};

let tempPrice = 0;
export const writeNumberPriceToFile = (price: number) => {
  if (price != tempPrice) {
    const filePath = path.join(__dirname, "prices.txt");
    const dataToWrite = `${price}\n`;

    fs.appendFileSync(filePath, dataToWrite, "utf8");
    tempPrice = price;
  } else {
    console.log("Пососи!");
  }
};
