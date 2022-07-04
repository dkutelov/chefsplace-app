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
import { ShowDeliveryAddress } from "../../components/delivery-address.component";

//Types and Context
import { DeliveryAddress } from "@types/Profile";
import { CartContext } from "@services";

export const GuestCheckout = () => {
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const { guestDeliveryAddress } = useContext(CartContext);
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
      </SectionContainer>
    </CheckoutContainer>
  );
};
