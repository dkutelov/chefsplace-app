import { ApiConfig } from "@common/types/api";
import { Order } from "@types/Order";
import { ProductConnection, ProductList } from "@types/Product";
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

const createProfile = async (
  config: ApiConfig,
  uid: string,
  email: string
): Promise<Profile> => {
  return await config.fetch<ReturnType>({
    method: "POST",
    url: config.apiUrl + "users",
    bodyData: {
      profile: {
        uid,
        email,
      },
    },
  });
};

export default createProfile;
