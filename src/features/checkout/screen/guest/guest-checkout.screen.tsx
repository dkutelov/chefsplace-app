import React, { useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  SectionContainer,
  CheckoutContainer,
  CheckoutSubtitle,
  SectionInnerContainer,
} from "../../components/checkout-type-select.styles";

//Components
import { CartSummary } from "@features/cart/components/cart-summary/cart-summary.component";
import { Button } from "@components/button/button.component";
import { Text } from "@components/typography/text.component";
import { ShowDeliveryAddress } from "../../components/delivery-address.component";

//Types and Context
import { DeliveryAddress } from "@types/Profile";
import { CartContext } from "@services";
import { ShowInvoiceAddress } from "@features/checkout/components/invoice-address.component";

export const GuestCheckout = () => {
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
    </CheckoutContainer>
  );
};
