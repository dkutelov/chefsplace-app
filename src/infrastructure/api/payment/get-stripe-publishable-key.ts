import createStripe from "stripe-client";
import { ApiConfig } from "@common/types/api";

export const getPublishableKey = async (
  config: ApiConfig
): Promise<{ [key: string]: string }> => {
  try {
    const res = await config.fetch<{ [key: string]: string }>({
      method: "GET",
      url: config.apiUrl + "orders/pay/publishable-key",
    });
    return res;
  } catch (error) {
    throw new Error("Грешка при изтегляне на ключ за плащане!");
  }
};
