import React, { useState, useContext, useEffect } from "react";
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
import { CartContext } from "../../../services/cart/cart.context";
import {
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_QUANTITY,
} from "../../../services/cart/cart.action-types";

interface Props {
  cartItem: CartItem;
}

export const CartItemCard = ({ cartItem }: Props) => {
  const { id, item, quantity } = cartItem;
  console.log(item);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { cartItems, isLoading, error, dispatch } = useContext(CartContext);

  //TODO: Notification Max Quantity
  //TODO: Add item to cart

  useEffect(() => {
    const currentItemFromState = cartItems.find(
      (x) => x.item.id === cartItem.item.id
    );

    if (currentItemFromState?.quantity === itemQuantity) {
      return;
    }
    dispatch({
      type: UPDATE_ITEM_QUANTITY,
      payload: {
        cartItem,
        newQuantity: itemQuantity,
      },
    });
  }, [itemQuantity]);

  const removeItem = () => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: { cartItem } });
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
            maxQuantity={cartItem.item.maxQuantity}
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
