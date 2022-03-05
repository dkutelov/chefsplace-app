import React from "react";
import { Feather } from "@expo/vector-icons";
import { CartItem } from "../../../types/Cart";
import { colors } from "../../../infrastructure/theme/colors";

import {
  CartItemWrapper,
  TopContent,
  CardContent,
  ProductImage,
  Title,
  Label,
  QuantityWrapper,
  PriceWrapper,
  Price,
  PriceWith,
  PriceInnerWrapper,
  DeleteIcon,
} from "./cart-item.styles";

import { QuantitySelector } from "../../../components/quantity-selector/quantity-selector.component";

interface Props {
  cartItem: CartItem;
}

export const CartItemCard = ({ cartItem }: Props) => {
  const { id, item, quantity } = cartItem;
  const [itemQuantity, setItemQuantity] = React.useState(quantity);
  //TODO: Not enough quantity
  //TODO: Update context on quantity change
  //TODO: Remove item from cart

  const removeItem = () => {
    console.warn("remove");
  };
  return (
    <CartItemWrapper>
      <TopContent>
        <ProductImage
          key={item.name}
          source={{ uri: item.image }}
          resizeMode="contain"
        />
        <Title>{item.name}</Title>
        <DeleteIcon onPress={removeItem}>
          <Feather name="trash" size={14} color={colors.ui.secondary} />
        </DeleteIcon>
      </TopContent>
      <CardContent>
        <QuantityWrapper>
          <Label>Количество</Label>
          <QuantitySelector
            quantity={itemQuantity}
            setQuantity={setItemQuantity}
          />
        </QuantityWrapper>
        <PriceWrapper>
          <Label>Цена</Label>
          <PriceInnerWrapper>
            <Price>{item.price / 100} лв</Price>
            <PriceWith>
              {Math.floor(item.price * 1.2) / 100}лв (с ДДС)
            </PriceWith>
          </PriceInnerWrapper>
        </PriceWrapper>
        <PriceWrapper>
          <Label>Сума</Label>
          <PriceInnerWrapper>
            <Price>{(item.price * itemQuantity) / 100} лв</Price>
            <PriceWith>
              {Math.floor(item.price * itemQuantity * 1.2) / 100}лв (с ДДС)
            </PriceWith>
          </PriceInnerWrapper>
        </PriceWrapper>
      </CardContent>
    </CartItemWrapper>
  );
};
