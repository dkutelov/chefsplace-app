import React, { useContext } from "react";

import { CartContext } from "../../../../services/cart/cart.context";
import {
  CartSummaryWrapper,
  Label,
  Row,
  Value,
  Title,
} from "./cart-summary.styles";

export const CartSummary = ({
  amount,
  deliveryCharge,
}: {
  amount: number;
  deliveryCharge: number;
}) => {
  const { cartItems, dispatch } = useContext(CartContext);

  return (
    <CartSummaryWrapper>
      <Title>Продукти и доставка</Title>
      <Row>
        <Label>Продукти</Label>
        <Value>{(amount / 100).toFixed(2)} лв.</Value>
      </Row>
      <Row>
        <Label>Доставка</Label>
        <Value>{deliveryCharge.toFixed(2)} лв.</Value>
      </Row>
      <Row>
        <Label style={{ fontWeight: "bold" }}>Сума без ДДС</Label>
        <Value style={{ fontWeight: "bold" }}>
          {(amount / 100 + deliveryCharge).toFixed(2)} лв.
        </Value>
      </Row>
      <Row>
        <Label>ДДС</Label>
        <Value>{((amount / 100 + deliveryCharge) * 0.2).toFixed(2)} лв.</Value>
      </Row>
      <Row>
        <Label style={{ fontWeight: "bold" }}>Сума с ДДС</Label>
        <Value style={{ fontWeight: "bold" }}>
          {((amount / 100 + deliveryCharge) * 1.2).toFixed(2)} лв.
        </Value>
      </Row>
    </CartSummaryWrapper>
  );
};
