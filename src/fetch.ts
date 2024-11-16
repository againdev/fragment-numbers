import axios from "axios";
import { ForSaleResponse } from "./@types/index";

export const getOnSaleNumbers = async (): Promise<ForSaleResponse | null> => {
  const hash = process.env.FRAGMENT_HASH as string;

  try {
    const { data } = await axios.post<ForSaleResponse>(
      `https://fragment.com/api?hash=${hash}`,
      new URLSearchParams({
        type: "numbers",
        query: "",
        filter: "sale",
        sort: "price_asc",
        method: "searchAuctions",
      }),
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    return data;
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
    return null;
  }
};
