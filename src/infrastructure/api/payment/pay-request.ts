import createStripe from "stripe-client";
import { ApiConfig } from "@common/types/api";

const stripe = createStripe("pk_test_MDxNQI9pKFgcODiEl0SWjMUk");

export const cardTokenRequest = (card: any) => stripe.createToken({ card });

export const payRequest = async (
  config: ApiConfig,
  token: string,
  amount: number,
  name: string
): Promise<any> => {
  try {
    const data = JSON.stringify({ token, name, amount });
    const res = await config.fetch<any>({
      method: "POST",
      url: config.apiUrl + "/pay",
      bodyData: data,
    });

    if (res.status > 200) {
      throw new Error("Грешка при плащане!");
    }

    return res.json();
  } catch (error) {
    throw new Error("Грешка при плащане!");
  }
};
