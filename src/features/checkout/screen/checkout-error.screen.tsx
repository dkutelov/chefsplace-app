import React from "react";

import { SafeArea, Text, Spacer } from "@components";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutErrorScreen = ({ route }) => {
  let error = "Грешка";

  if (route && route.params && route.params.error) {
    error = route.params.error.toString();
  }
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" />
        <Spacer position="top" size="large">
          <Text variant="label">{error}</Text>
        </Spacer>
      </CartIconContainer>
    </SafeArea>
  );
};
