import { ApiConfig } from "@common/types/api";

export const getPaymentIntent = async (
  config: ApiConfig,
  amount: number
): Promise<any> => {
  try {
    const res = await config.fetch<{ clientSecret: string }>({
      method: "POST",
      url: config.apiUrl + "orders/pay/create-payment-intent",
      bodyData: { amount, paymentMethodType: "card", currency: "BGN" },
    });

    return res;
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};
