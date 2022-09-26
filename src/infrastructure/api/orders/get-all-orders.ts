import { ApiConfig } from "../../../types/common/api";
import { Order } from "../../../types/Order";

type ReturnType = {
  [key: string]: string;
};

export const getAllOrders = async (config: ApiConfig): Promise<[Order]> => {
  return await config.fetch<[Order]>({
    method: "GET",
    url: config.apiUrl + `orders`,
  });
};
