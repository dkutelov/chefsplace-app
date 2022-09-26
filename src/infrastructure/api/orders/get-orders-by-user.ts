import { ApiConfig } from "../../../types/common/api";
import { Order } from "../../../types/Order";

type ReturnType = {
  [key: string]: string;
};

export const getOrdersByUser = async (
  config: ApiConfig,
  userId: string
): Promise<Order[]> => {
  return await config.fetch<Order[]>({
    method: "GET",
    url: config.apiUrl + `orders/${userId}`,
  });
};
