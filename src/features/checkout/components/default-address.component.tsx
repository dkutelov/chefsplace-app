import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { DeliveryAddress } from "@types/Profile";

export interface IProps {
  addresses: DeliveryAddress[];
}

export const DefaultAddress = ({ addresses }: IProps) => {
  const [defautAddress, setDefaultAddress] = useState<DeliveryAddress | null>(
    null
  );

  useEffect(() => {
    const defaultAddress = addresses.find((x) => x.isDefault);

    if (defaultAddress) {
      setDefaultAddress(defaultAddress);
    }
  }, []);

  return (
    <>
      {defautAddress && (
        <View>
          <Text>Вашият адрес по подразбиране е:</Text>
          <Text>
            {defautAddress.postCode} {defautAddress.city}, {defautAddress.area},{" "}
            {defautAddress.street} №{defautAddress.number}
          </Text>
        </View>
      )}
    </>
  );
};
