import { Text } from "react-native";
import React, { useState } from "react";
import { Spacer } from "@components/spacer/spacer.component";
import {
  CheckoutContainer,
  CheckoutSubtitle,
} from "../components/checkout-type-select.styles";
import { MyRadioButton } from "@components/forms/radio-button/radio-buttton.component";

export const AuthCheckout = () => {
  const [value, setValue] = React.useState("first");
  return (
    <CheckoutContainer>
      <Spacer position="top" size="large">
        <Text>Cart Summary</Text>
      </Spacer>
      <Spacer position="top" size="large">
        <CheckoutSubtitle>Адреси</CheckoutSubtitle>
      </Spacer>
      <Spacer position="top" size="large">
        <Text>Адрес на доставка</Text>
      </Spacer>
      <Spacer position="top" size="large">
        <Text>Адрес за фактуриране</Text>
      </Spacer>
      <Spacer position="top" size="large">
        <CheckoutSubtitle>Начин на плащане</CheckoutSubtitle>
        <MyRadioButton
          value={value}
          setValue={setValue}
          items={[
            { label: "Наложен платеж или ППП", value: "0" },
            { label: "Банков път", value: "1" },
            { label: "В брой (не важи за доставки с куриер)", value: "2" },
          ]}
        />
      </Spacer>
      <Spacer position="top" size="large">
        <Text>Забележка</Text>
      </Spacer>
      <Spacer position="top" size="large">
        <Text>Поръчай</Text>
      </Spacer>
    </CheckoutContainer>
  );
};
