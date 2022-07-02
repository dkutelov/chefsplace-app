import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Text } from "@components/typography/text.component";
import { DeliveryAddress } from "@types/Profile";
import { Spacer } from "@components/spacer/spacer.component";
import { colors } from "@infrastructure/theme/colors";

export interface IProps {
  deliveryAddressId: string;
  addresses?: DeliveryAddress[];
  setDeliveryAddressId: Dispatch<SetStateAction<string>>;
}

export const SelectedDeliveryAddress = ({
  deliveryAddressId,
  addresses,
  setDeliveryAddressId,
}: IProps) => {
  const [currentAddress, setCurrentAddress] = useState<DeliveryAddress | null>(
    null
  );

  useEffect(() => {
    if (!addresses || addresses.length === 0) {
      return;
    }
    const defaultAddress = addresses.find((x) => x.isDefault);
    if (defaultAddress) {
      setCurrentAddress(defaultAddress);
      setDeliveryAddressId(defaultAddress._id);
    }
  }, []);

  useEffect(() => {
    if (!addresses || addresses.length === 0 || !deliveryAddressId) {
      return;
    }
    const currentAddress = addresses.find((x) => x._id === deliveryAddressId);
    if (currentAddress) {
      setCurrentAddress(currentAddress);
    }
  }, [deliveryAddressId]);

  return (
    <Spacer position="top" size="small">
      <Spacer position="bottom" size="medium">
        <Text variant="title">Избран адрес за доставка</Text>
        {!currentAddress ? (
          <Text variant="body">Няма избран адрес за доставка</Text>
        ) : (
          <Spacer position="top" size="medium">
            <Text variant="body" style={{ color: colors.ui.primary }}>
              ({currentAddress?.name}) {currentAddress.postCode}{" "}
              {currentAddress.city}{" "}
              {currentAddress.area ? "жк./кв " + currentAddress.area : ""}{" "}
              {currentAddress.street ? "ул " + currentAddress.street : ""}{" "}
              {currentAddress.number ? "№ " + currentAddress.number : ""}{" "}
              {currentAddress.block ? "бл " + currentAddress.block : ""}{" "}
              {currentAddress.entrance ? "вх " + currentAddress.entrance : ""}{" "}
              {currentAddress.floor ? "ет " + currentAddress.floor : ""}{" "}
              {currentAddress.apartment ? "ап " + currentAddress.apartment : ""}
            </Text>
          </Spacer>
        )}
      </Spacer>
    </Spacer>
  );
};
