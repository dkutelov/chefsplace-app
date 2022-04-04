import React, { useContext, useEffect } from "react";
import { Caption } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

// Types
import { CartItem } from "@types/Cart";

// Context
import {
  AuthenticationContext,
  CartContext,
  ProductsContext,
  UPDATE_CART_ITEMS_ON_LOAD,
} from "@services";

// Components
import { SafeArea } from "@components/utils/safe-area.component";
import { Button } from "@components/button/button.component";
import { CartItemCard } from "../components/cart-item/cart-item.component";
import { CartSummary } from "../components/cart-summary/cart-summary.component";

// Styles
import { CartItemList, NoItemsInCart } from "./cart.styles";

export const CartScreen = () => {
  const { cartItems, isLoading, error, dispatch } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthenticationContext);
  const { products } = useContext(ProductsContext);

  const { navigate } = useNavigation();

  const onCheckout = () => {
    console.log("😁");
    if (isAuthenticated) {
      navigate("AuthCheckout");
    } else {
      navigate("CheckoutTypeSelect");
    }
  };

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
        <>
          <CartItemList
            data={cartItems}
            renderItem={(item: { item: CartItem }) => (
              <CartItemCard cartItem={item.item} />
            )}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <CartSummary amount={cartAmount()} />}
          />
          <Button
            disabled={cartItems.length === 0}
            text="Към Поръчване"
            onButtonPress={onCheckout}
            containerStyles={{ marginBottom: 0 }}
          />
        </>
      )}
    </SafeArea>
  );
};
