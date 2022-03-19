import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AddToCardContainer } from "./add-to-cart.styles";
import { CartItem } from "../../types/Cart";
import { ADD_ITEM_TO_CART } from "../../services/cart/cart.action-types";
import { CartContext } from "../../services/cart/cart.context";

interface IProps {
  cartItem: CartItem;
  size?: number;
}

export const AddToCart = ({ cartItem, size }: IProps) => {
  const { id, name, image, price, quantity, maxQuantity } = cartItem;
  const { dispatch: contextDispatch } = useContext(CartContext);

  const addToCart = () => {
    contextDispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        id,
        name,
        image,
        price,
        maxQuantity,
        quantity: quantity || 1,
      },
    });
  };
  return (
    <AddToCardContainer onPress={addToCart} size={size || 28}>
      <Ionicons name="cart" size={size} color="white" />
    </AddToCardContainer>
  );
};
