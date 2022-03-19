import React, { useContext, useEffect } from "react";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import { NoItemsInCart } from "./cart.styles";
import { Caption } from "react-native-paper";
import { CartItemCard } from "../components/cart-item/cart-item.component";
import { CartItemList } from "./cart.styles";
import { CartItem } from "../../../types/Cart";
import { CartSummary } from "../components/cart-summary/cart-summary.component";
import { ProductsContext } from "../../../services/products/products.context";
import { UPDATE_CART_ITEMS_ON_LOAD } from "../../../services/cart/cart.action-types";

export const CartScreen = () => {
  const { cartItems, isLoading, error, dispatch } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    dispatch({
      type: UPDATE_CART_ITEMS_ON_LOAD,
      payload: { products },
    });
  }, [products]);

  const cartAmount = (): number => {
    return cartItems.reduce(
      (prevValue, product: CartItem) =>
        (prevValue += product.quantity * product.price),
      0
    );
  };

  return (
    <SafeArea>
      {cartItems.length === 0 ? (
        <NoItemsInCart>
          <Caption>Нямате продукти в количката!</Caption>
        </NoItemsInCart>
      ) : (
        <CartItemList
          data={cartItems}
          renderItem={(item: { item: CartItem }) => (
            <CartItemCard cartItem={item.item} />
          )}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <CartSummary amount={cartAmount()} />}
        />
      )}
    </SafeArea>
  );
};
