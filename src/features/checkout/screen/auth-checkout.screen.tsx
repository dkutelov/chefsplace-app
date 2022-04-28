import React, { useState, useContext } from "react";
import { TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  SectionContainer,
  CheckoutContainer,
  CheckoutSubtitle,
  SectionInnerContainer,
} from "../components/checkout-type-select.styles";
import { MyRadioButton } from "@components/forms/radio-button/radio-buttton.component";
import Checkbox from "@components/forms/checkbox/checkbox-component";
import { MyPicker } from "@components/forms/picker/picker.component";
import { CartSummary } from "@features/cart/components/cart-summary/cart-summary.component";
import { Text } from "@components/typography/text.component";
import { AuthenticationContext } from "@services";
import { Button } from "@components/button/button.component";

export const AuthCheckout = () => {
  const [value, setValue] = useState("first");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [deliveryAddressId, setDeliveryAddressId] = useState("");
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const onTermsAgreed = () => {
    setTermsAgreed(!termsAgreed);
  };

  const { profile, user } = useContext(AuthenticationContext);

  //TODO: set default address
  console.log("😁", profile?.deliveryAddress.length === 0);
  return (
    <CheckoutContainer>
      <SectionContainer>
        <CheckoutSubtitle>Обобщение на поръчката</CheckoutSubtitle>
        <CartSummary amount={params?.cartAmount ?? 0} />
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Адрес на доставка</CheckoutSubtitle>
        <SectionInnerContainer>
          {profile?.deliveryAddress.length === 0 ? (
            <>
              <Text variant="body">Още нямате адрес на доставка</Text>
              <Button
                text="Добави Адрес На Доставка"
                onButtonPress={() => {
                  navigate("NewDeliveryAddress");
                }}
              />
            </>
          ) : (
            <MyPicker
              items={profile?.deliveryAddress?.map((x) => ({
                label: x.name,
                value: x._id,
              }))}
              value={deliveryAddressId}
              setValue={setDeliveryAddressId}
            />
          )}
        </SectionInnerContainer>
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Адрес за фактуриране</CheckoutSubtitle>
        <SectionInnerContainer>
          {profile?.invoiceAddress?.length === 0 ? (
            <>
              <Text variant="body">Още нямате адрес за фактуриране</Text>
              <Button text="Добави Адрес За Фактура" onButtonPress={() => {}} />
            </>
          ) : (
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
          )}
        </SectionInnerContainer>
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Начин на плащане</CheckoutSubtitle>
        <SectionInnerContainer>
          <MyRadioButton
            value={value}
            setValue={setValue}
            items={[
              { label: "Наложен платеж или ППП", value: "0" },
              { label: "Банков път", value: "1" },
              { label: "В брой (не важи за доставки с куриер)", value: "2" },
            ]}
          />
        </SectionInnerContainer>
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Забележка</CheckoutSubtitle>
        <SectionInnerContainer>
          <TextInput onChangeText={() => {}} value={"😁"} />
        </SectionInnerContainer>
      </SectionContainer>
      <Checkbox
        label="Съгласявам се безусловно с общите условия"
        checked={termsAgreed}
        onCheckboxPress={onTermsAgreed}
      />
      <SectionContainer>
        <Button text="ПОРЪЧВАМ" onButtonPress={() => {}} />
      </SectionContainer>
    </CheckoutContainer>
  );
};
