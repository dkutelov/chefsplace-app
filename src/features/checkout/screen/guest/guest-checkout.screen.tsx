import React, { useState } from "react";
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

//Types
import { DeliveryAddress } from "@types/Profile";

export const GuestCheckout = () => {
  const [deliveryAddress, setDeliveryAddress] =
    useState<DeliveryAddress | null>(null);

  const { params } = useRoute();
  const { navigate } = useNavigation();

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
          {deliveryAddress ? (
            <ShowDeliveryAddress deliveryAddress={deliveryAddress} />
          ) : (
            <Button
              text="Добави Адрес На Доставка"
              onButtonPress={() => {
                navigate("NewGuestDeliveryAddress");
              }}
            />
          )}
        </SectionInnerContainer>
      </SectionContainer>
    </CheckoutContainer>
  );
};
