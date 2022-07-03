import React, { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  SectionContainer,
  CheckoutContainer,
  CheckoutSubtitle,
  SectionInnerContainer,
} from "../components/checkout-type-select.styles";

//Components
import { MyRadioButton } from "@components/forms/radio-button/radio-buttton.component";
import Checkbox from "@components/forms/checkbox/checkbox-component";
import { MyPicker } from "@components/forms/picker/picker.component";
import { CartSummary } from "@features/cart/components/cart-summary/cart-summary.component";
import { Text } from "@components/typography/text.component";
import { Button } from "@components/button/button.component";
import { Spacer } from "@components/spacer/spacer.component";
import { CreditCardInput } from "../components/credit-card.component";
import { SelectedDeliveryAddress } from "../components/selected-delivery-address.component";
import { SelectedInvoiceAddress } from "../components/selected-invoice-address.component";
import { colors } from "@infrastructure/theme/colors";
import { AuthenticationContext, CartContext } from "@services";

import { Order } from "@types/Order";
import createOrder from "@infrastructure/api/orders/create-order";
import { getConfig } from "@infrastructure/api/config";

export const AuthCheckout = () => {
  const [paymentType, setPaymentType] = useState("0");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [deliveryAddressId, setDeliveryAddressId] = useState("");
  const [invoiceAddressId, setInvoiceAddressId] = useState("");
  const [creditCardName, setCreditCardName] = useState("");

  const { cartItems } = useContext(CartContext);
  const { profile } = useContext(AuthenticationContext);

  const { params } = useRoute();
  const { navigate } = useNavigation();
  const config = getConfig();

  const onTermsAgreed = () => {
    setTermsAgreed(!termsAgreed);
  };

  console.log(profile);
  const placeOrder = async () => {
    if (profile && profile._id && cartItems.length > 0) {
      const order: Order = {
        userId: profile?._id,
        items: cartItems,
        deliveryAddressId: deliveryAddressId,
        invoiceAddressId: invoiceAddressId,
        payment: paymentType,
      };

      // add spinner
      const result = await createOrder(config, profile._id, order);
      if (result.success) {
        console.log("Navigate to thank your screen and pass orderId");
        navigate("Success");
      } else {
        //show error screen
      }
    }
  };

  //TODO: set default address
  return (
    <CheckoutContainer>
      <SectionContainer>
        <CheckoutSubtitle>Обобщение на поръчката</CheckoutSubtitle>
        <CartSummary
          amount={params?.cartAmount ?? 0}
          deliveryCharge={params?.deliveryCharge ?? 4.95}
        />
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Адрес на доставка</CheckoutSubtitle>
        <SectionInnerContainer>
          {profile?.deliveryAddress.length === 0 ? (
            <>
              <Spacer position="bottom" size="medium">
                <Text variant="body">Още нямате адрес(и) на доставка</Text>
              </Spacer>
            </>
          ) : (
            <>
              {profile?.deliveryAddress.length >= 1 && (
                <>
                  <SelectedDeliveryAddress
                    deliveryAddressId={deliveryAddressId}
                    addresses={profile?.deliveryAddress}
                    setDeliveryAddressId={setDeliveryAddressId}
                  />
                  <Spacer position="top" size="medium">
                    <Spacer position="bottom" size="medium">
                      <Text variant="title">Избери адрес на доставка</Text>
                    </Spacer>
                    <MyPicker
                      items={profile?.deliveryAddress?.map((x) => ({
                        label: x.name,
                        value: x._id,
                      }))}
                      value={deliveryAddressId}
                      setValue={setDeliveryAddressId}
                    />
                  </Spacer>
                </>
              )}
            </>
          )}
          <Button
            text="Добави Адрес На Доставка"
            onButtonPress={() => {
              navigate("NewDeliveryAddress");
            }}
          />
        </SectionInnerContainer>
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Адрес за фактуриране</CheckoutSubtitle>
        <SectionInnerContainer>
          {profile?.invoiceAddress?.length === 0 ? (
            <>
              <Spacer position="bottom" size="medium">
                <Text variant="body">Още нямате данни за фактуриране</Text>
              </Spacer>
            </>
          ) : (
            <>
              {profile?.invoiceAddress.length >= 1 && (
                <>
                  <SelectedInvoiceAddress
                    invoiceAddressId={invoiceAddressId}
                    addresses={profile?.invoiceAddress}
                    setInvoiceAddressId={setInvoiceAddressId}
                  />
                  <Spacer position="top" size="medium">
                    <Spacer position="bottom" size="medium">
                      <Text variant="title">Избери данни за фактура</Text>
                    </Spacer>
                    <MyPicker
                      items={profile?.invoiceAddress?.map((x) => ({
                        label: x.addressName,
                        value: x._id,
                      }))}
                      value={invoiceAddressId}
                      setValue={setInvoiceAddressId}
                    />
                  </Spacer>
                </>
              )}
            </>
          )}

          <Button
            text="Добави Адрес За Фактура"
            onButtonPress={() => {
              navigate("NewInvoiceDataAddress");
            }}
          />
        </SectionInnerContainer>
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Начин на плащане</CheckoutSubtitle>
        <SectionInnerContainer>
          <MyRadioButton
            value={paymentType}
            setValue={setPaymentType}
            items={[
              { label: "Наложен платеж или ППП", value: "0" },
              { label: "Банков път", value: "1" },
              { label: "В брой (не важи за доставки с куриер)", value: "2" },
              { label: "С кредитна/ дебитна карта", value: "3" },
            ]}
          />
        </SectionInnerContainer>
        {paymentType === "3" && (
          <>
            <Spacer position="top" size="large">
              <SectionInnerContainer>
                <Text variant="body">Данни кредитна/дебитна карта</Text>
                <Spacer position="top" size="large">
                  <TextInput
                    label="Име (както e изписано на картата)"
                    activeUnderlineColor={colors.ui.primary}
                    onChangeText={setCreditCardName}
                    value={creditCardName}
                  />
                </Spacer>
                <Spacer position="top" size="large">
                  <CreditCardInput
                    name={creditCardName}
                    onError={() => {}}
                    onSuccess={() => {}}
                  />
                </Spacer>
              </SectionInnerContainer>
            </Spacer>
          </>
        )}
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Забележка</CheckoutSubtitle>
        <SectionInnerContainer>
          <TextInput onChangeText={() => {}} value={""} />
        </SectionInnerContainer>
      </SectionContainer>
      <Checkbox
        label="Съгласявам се безусловно с общите условия"
        checked={termsAgreed}
        onCheckboxPress={onTermsAgreed}
      />
      <SectionContainer>
        <Button
          disabled={
            !termsAgreed && !deliveryAddressId && params?.cartAmount > 0
          }
          text="ПОРЪЧВАМ"
          onButtonPress={placeOrder}
        />
      </SectionContainer>
    </CheckoutContainer>
  );
};
