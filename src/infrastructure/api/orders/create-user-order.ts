import { ApiConfig } from "@common/types/api";
import { Order } from "@types/Order";

type ReturnType = {
  [key: string]: string;
};

export const createUserOrder = async (
  config: ApiConfig,
  userId: string,
  order: Order
): Promise<{ [key: string]: string }> => {
  return await config.fetch<ReturnType>({
    method: "POST",
    url: config.apiUrl + `orders/${userId}`,
    bodyData: {
      order,
    },
  });
};
