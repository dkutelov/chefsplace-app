import { ApiConfig } from "@common/types/api";
import { InvoiceAddress } from "@types/Profile";

import { DeliveryAddress } from "@types/Profile";

export const createInvoiceAddress = async (
  config: ApiConfig,
  userId: string,
  address: InvoiceAddress
): Promise<InvoiceAddress> => {
  return await config.fetch<InvoiceAddress>({
    method: "POST",
    url: config.apiUrl + "users/" + userId + "/invoice-address",
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
