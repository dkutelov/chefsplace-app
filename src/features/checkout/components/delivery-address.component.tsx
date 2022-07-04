import React from "react";
import { Text } from "@components/typography/text.component";
import { DeliveryAddress } from "@types/Profile";
import { Spacer } from "@components/spacer/spacer.component";
import { colors } from "@infrastructure/theme/colors";

export interface IProps {
  deliveryAddress: DeliveryAddress;
}

export const ShowDeliveryAddress = ({ deliveryAddress }: IProps) => {
  return (
    <Spacer position="top" size="small">
      <Spacer position="bottom" size="medium">
        <Text variant="title">Избран адрес за доставка</Text>

        <Spacer position="top" size="medium">
          <Text variant="body" style={{ color: colors.ui.primary }}>
            {deliveryAddress?.name ? "(" + deliveryAddress.name + ") " : ""}
            {deliveryAddress?.name
              ? "пк " + deliveryAddress.postCode + " "
              : ""}
            {deliveryAddress.city}{" "}
            {deliveryAddress.area ? "жк./кв " + deliveryAddress.area : ""}{" "}
            {deliveryAddress.street ? "ул " + deliveryAddress.street : ""}{" "}
            {deliveryAddress.number ? "№ " + deliveryAddress.number : ""}{" "}
            {deliveryAddress.block ? "бл " + deliveryAddress.block : ""}{" "}
            {deliveryAddress.entrance ? "вх " + deliveryAddress.entrance : ""}{" "}
            {deliveryAddress.floor ? "ет " + deliveryAddress.floor : ""}{" "}
            {deliveryAddress.apartment ? "ап " + deliveryAddress.apartment : ""}
          </Text>
        </Spacer>
      </Spacer>
    </Spacer>
  );
};
