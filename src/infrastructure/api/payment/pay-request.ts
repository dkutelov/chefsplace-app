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
    const data = { token, name, amount };

    const res = await config.fetch<any>({
      method: "POST",
      url: config.apiUrl + "orders/pay",
      bodyData: { data },
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
