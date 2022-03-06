import React, { useContext } from "react";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import { NoItemsInCart } from "./cart.styles";
import { Caption } from "react-native-paper";
import { CartItemCard } from "../components/cart-item.component";

export const CartScreen = () => {
  const { cartItems, isLoading, error } = useContext(CartContext);
  console.log("cartItems", cartItems);

  return (
    <SafeArea>
      {cartItems.length === 0 ? (
        <NoItemsInCart>
          <Caption>Нямате добавени продукти!</Caption>
        </NoItemsInCart>
      ) : (
        <CartItemCard cartItem={cartItems[0]} />
      )}
    </SafeArea>
  );
};
