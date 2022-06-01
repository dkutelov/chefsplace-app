import { ApiConfig } from "@common/types/api";
import { DeliveryAddress } from "@types/Profile";

export const createDeliveryAddress = async (
  config: ApiConfig,
  userId: string,
  address: DeliveryAddress
): Promise<DeliveryAddress> => {
  return await config.fetch<DeliveryAddress>({
    method: "POST",
    url: config.apiUrl + "users/" + userId + "/delivery-address",
    bodyData: {
      address,
    },
  });
};

export const deleteDeliveryAddress = async (
  config: ApiConfig,
  userId: string,
  addressId: string
): Promise<{ message: string }> => {
  return await config.fetch<{ message: string }>({
    method: "DELETE",
    url: config.apiUrl + "users/" + userId + "/delivery-address/" + addressId,
  });
};

export const editDeliveryAddress = async (
  config: ApiConfig,
  userId: string,
  addressId: string,
  address: DeliveryAddress
): Promise<{ message: string }> => {
  return await config.fetch<{ message: string }>({
    method: "POST",
    url: config.apiUrl + "users/" + userId + "/delivery-address/" + addressId,
    bodyData: {
      address,
    },
  });
};
