import { ApiConfig } from "@common/types/api";
import { Order } from "@types/Order";
import { DeliveryAddress, InvoiceAddress, Profile } from "@types/Profile";

type ReturnType = {
  profile: {
    uid: string;
    email: string;
    orders: Order[];
    deliveryAddress: DeliveryAddress[];
    invoiceAddress: InvoiceAddress[];
    id: string;
    created: string;
  };
};

export const getProfileByUid = async (
  config: ApiConfig,
  uid: string
): Promise<Profile> => {
  const data = await config.fetch<ReturnType>({
    url: config.apiUrl + "users",
    query: {
      uid,
    },
  });

  const profile = data;
  return profile;
};

export const getProfileById = async (
  config: ApiConfig,
  userId: string
): Promise<Profile> => {
  const data = await config.fetch<ReturnType>({
    url: config.apiUrl + "users",
    query: {
      id: userId,
    },
  });

  const profile = data;
  return profile;
};
