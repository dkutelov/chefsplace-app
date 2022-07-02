import { ApiConfig } from "@common/types/api";
import { Order } from "@types/Order";
import { DeliveryAddress, InvoiceAddress, Profile } from "@types/Profile";

type ReturnType = {
  [key: string]: string;
};

const createOrder = async (
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

export default createOrder;
