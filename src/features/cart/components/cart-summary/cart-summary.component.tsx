import React, { useContext } from "react";
import { Button } from "../../../../components/button/button.component";
import { CartContext } from "../../../../services/cart/cart.context";
import {
  CartSummaryWrapper,
  Label,
  Row,
  Value,
  Title,
} from "./cart-summary.styles";

export const CartSummary = ({ amount }: { amount: number }) => {
  const { cartItems, dispatch } = useContext(CartContext);

  const onCheckout = () => {
    console.log("checkout", cartItems);
  };
  return (
    <CartSummaryWrapper>
      <Title>Общо</Title>
      <Row>
        <Label>Продукти</Label>
        <Value>{(amount / 100).toFixed(2)} лв.</Value>
      </Row>
      <Row>
        <Label>Доставка</Label>
        <Value>5.00 лв.</Value>
      </Row>
      <Row>
        <Label>Сума без ДДС</Label>
        <Value>{(amount / 100 + 5).toFixed(2)} лв.</Value>
      </Row>
      <Row>
        <Label>ДДС</Label>
        <Value>{((amount / 100 + 5) * 0.2).toFixed(2)} лв.</Value>
      </Row>
      <Row>
        <Label>Сума с ДДС</Label>
        <Value>{((amount / 100 + 5) * 1.2).toFixed(2)} лв.</Value>
      </Row>
      <Button
        text="Към Поръчване"
        onButtonPress={onCheckout}
        containerStyles={{ marginBottom: 0 }}
      />
    </CartSummaryWrapper>
  );
};
