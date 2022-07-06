import React, { useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native-paper";

import {
  SectionContainer,
  CheckoutContainer,
  CheckoutSubtitle,
  SectionInnerContainer,
} from "../../components/checkout-type-select.styles";

//Components
import { CartSummary } from "@features/cart/components/cart-summary/cart-summary.component";
import { Button } from "@components/button/button.component";
import { MyRadioButton } from "@components/forms/radio-button/radio-buttton.component";
import { Text } from "@components/typography/text.component";
import { Spacer } from "@components/spacer/spacer.component";
import { ShowDeliveryAddress } from "../../components/delivery-address.component";
import { CreditCardInput } from "../../components/credit-card.component";

//Types and Context
import { DeliveryAddress } from "@types/Profile";
import { CartContext } from "@services";
import { ShowInvoiceAddress } from "@features/checkout/components/invoice-address.component";
import { getPaymentOptions } from "@infrastructure/utils/computed/getPaymentOptions";
import { colors } from "@infrastructure/theme/colors";

export const GuestCheckout = () => {
  const [paymentType, setPaymentType] = useState("0");
  const [creditCardName, setCreditCardName] = useState("");

  const { params } = useRoute();
  const { navigate } = useNavigation();

  const { guestDeliveryAddress, guestInvoiceAddress } = useContext(CartContext);
  console.log(guestDeliveryAddress);
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
          {guestDeliveryAddress && (
            <ShowDeliveryAddress deliveryAddress={guestDeliveryAddress} />
          )}
          <Button
            text={
              !guestDeliveryAddress
                ? "Добави Адрес На Доставка"
                : "Промени Адреса На Доставка"
            }
            onButtonPress={() => {
              navigate("NewGuestDeliveryAddress");
            }}
          />
        </SectionInnerContainer>
        <CheckoutSubtitle>Данни за фактура</CheckoutSubtitle>
        <SectionInnerContainer>
          {guestInvoiceAddress ? (
            <ShowInvoiceAddress invoiceAddress={guestInvoiceAddress} />
          ) : (
            <Text variant="body">Ако желаете фактура, моля добавете данни</Text>
          )}
          <Button
            text={
              !guestInvoiceAddress
                ? "Добави данни за фактура"
                : "Промени данни за фактура"
            }
            onButtonPress={() => {
              navigate("NewGuestInvoiceAddress");
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
            items={getPaymentOptions(guestDeliveryAddress?.city || "")}
          />
        </SectionInnerContainer>
        {paymentType === "2" && (
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
    </CheckoutContainer>
  );
};
