import { Text } from "react-native";
import React, { useState } from "react";
import { Spacer } from "@components/spacer/spacer.component";
import {
  CheckoutContainer,
  CheckoutSubtitle,
} from "../components/checkout-type-select.styles";
import { MyRadioButton } from "@components/forms/radio-button/radio-buttton.component";
import Checkbox from "@components/forms/checkbox/checkbox-component";
import { MyPicker } from "@components/forms/picker/picker.component";

export const AuthCheckout = () => {
  const [value, setValue] = useState("first");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [deliveryAddressId, setDeliveryAddressId] = useState("");

  const onTermsAgreed = () => {
    setTermsAgreed(!termsAgreed);
  };

  return (
    <CheckoutContainer>
      <Spacer position="top" size="large">
        <Text>Cart Summary</Text>
      </Spacer>
      <Spacer position="top" size="large">
        <CheckoutSubtitle>Адрес на доставка</CheckoutSubtitle>
        <MyPicker
          items={[
            { label: "Адрес 1", value: "123" },
            { label: "Адрес 2", value: "124" },
            { label: "Адрес 3", value: "125" },
            { label: "Адрес 4", value: "126" },
            { label: "Адрес 5", value: "127" },
          ]}
          value={deliveryAddressId}
          setValue={setDeliveryAddressId}
        />
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
      <Checkbox
        label="Съгласявам се безусловно с общите условия"
        checked={termsAgreed}
        onCheckboxPress={onTermsAgreed}
      />
      <Spacer position="top" size="large">
        <Text>Поръчай</Text>
      </Spacer>
    </CheckoutContainer>
  );
};
