import { ApiConfig } from "@common/types/api";

type ReturnType = {
  [key: string]: string;
};

export const updateOrderStatus = async (
  config: ApiConfig,
  orderId: string,
  status: String
): Promise<{ [key: string]: string }> => {
  return await config.fetch<ReturnType>({
    method: "POST",
    url: config.apiUrl + `orders/${orderId}/status`,
    bodyData: {
      status,
    },
  });
};
