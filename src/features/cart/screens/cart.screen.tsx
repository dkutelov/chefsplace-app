import React, { useContext } from "react";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import { NoItemsInCart } from "./cart.styles";
import { Caption } from "react-native-paper";
import { CartItemCard } from "../components/cart-item/cart-item.component";
import { CartItemList } from "./cart.styles";
import { CartItem } from "../../../types/Cart";
import { CartSummary } from "../components/cart-summary/cart-summary.component";

export const CartScreen = () => {
  const { cartItems, isLoading, error, dispatch } = useContext(CartContext);
  return (
    <SafeArea>
      {cartItems.length === 0 ? (
        <NoItemsInCart>
          <Caption>Нямате добавени продукти!</Caption>
        </NoItemsInCart>
      ) : (
        <>
          <CartItemList
            data={cartItems}
            renderItem={(item: { item: CartItem }) => (
              <CartItemCard cartItem={item.item} />
            )}
            showsVerticalScrollIndicator={false}
          />
          <CartSummary />
        </>
      )}
    </SafeArea>
  );
};
