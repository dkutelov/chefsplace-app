import { ApiConfig } from "@common/types/api";

interface ProfileCartItem {
  productId: string;
  quantity: number;
}

export const addItemToCart = async (
  config: ApiConfig,
  userId: string,
  item: ProfileCartItem
): Promise<{ [key: string]: any }> => {
  return await config.fetch<DeliveryAddress>({
    method: "POST",
    url: config.apiUrl + "users/" + userId + "/cart",
    bodyData: {
      cartItem: item,
    },
  });
};
