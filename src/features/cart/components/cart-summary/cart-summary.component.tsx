import React from "react";
import { Button } from "../../../../components/button/button.component";
import { CartSummaryWrapper, Title } from "./cart-summary.styles";

export const CartSummary = () => {
  return (
    <CartSummaryWrapper>
      <Title>Общо</Title>
      <Button text="Към Поръчване" onButtonPress={() => {}} />
    </CartSummaryWrapper>
  );
};
