import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

import { AddToCardContainer } from "./add-to-cart.styles";
import { CartItem } from "../../types/Cart";
import { ADD_ITEM_TO_CART } from "../../services/cart/cart.action-types";
import { CartContext } from "../../services/cart/cart.context";

interface IProps {
  cartItem: CartItem;
  size?: number;
  disabled?: boolean;
}

export const AddToCart = ({ cartItem, size, disabled = false }: IProps) => {
  const { productId, name, image, price, quantity, maxQuantity, weight } =
    cartItem;
  const { dispatch: contextDispatch } = useContext(CartContext);

  const addToCart = async () => {
    contextDispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        productId,
        name,
        image,
        price,
        maxQuantity,
        quantity: quantity || 1,
        weight: weight || 1,
      },
    });
  };

  return (
    <AddToCardContainer
      disabled={disabled}
      onPress={addToCart}
      size={size || 28}
    >
      <Ionicons name="cart" size={size} color="white" />
    </AddToCardContainer>
  );
};
