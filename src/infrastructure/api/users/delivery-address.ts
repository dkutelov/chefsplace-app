import { ApiConfig } from "@common/types/api";
import { DeliveryAddress } from "@types/Profile";

export const createDeliveryAddress = async (
  config: ApiConfig,
  userId: string,
  address: DeliveryAddress
): Promise<DeliveryAddress> => {
  try {
    console.log(userId, address);
    return await config.fetch<DeliveryAddress>({
      method: "POST",
      url: config.apiUrl + "users/" + userId + "/delivery-address",
      bodyData: {
        address,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
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

export const createGuestDeliveryAddress = async (
  config: ApiConfig,
  address: DeliveryAddress
): Promise<{
  address?: DeliveryAddress;
  success?: String;
  error?: String;
}> => {
  return await config.fetch<{
    address?: DeliveryAddress;
    success?: String;
    error?: String;
  }>({
    method: "POST",
    url: config.apiUrl + "addresses/delivery-address",
    bodyData: {
      address,
    },
  });
};
