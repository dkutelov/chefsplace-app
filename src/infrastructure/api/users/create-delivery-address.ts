import { ApiConfig } from "@common/types/api";
import { DeliveryAddress } from "@types/Profile";

const createDeliveryAddress = async (
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

export default createDeliveryAddress;
