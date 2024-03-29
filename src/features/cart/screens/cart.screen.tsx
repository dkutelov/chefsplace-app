import React, { useContext, useCallback, useState, useEffect } from "react";
import { Caption } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

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
import { SafeArea, Button, Spacer } from "@components";
import { CartItemCard } from "../components/cart-item/cart-item.component";
import { CartSummary } from "../components/cart-summary/cart-summary.component";

// Styles
import {
  CartItemList,
  NoItemsInCart,
  CartContainer,
  Title,
  CartIcon,
} from "./cart.styles";

import { calculateDeliveryCharge } from "@infrastructure/utils/computed/getDeliveryCharge";

export const CartScreen = () => {
  const { cartItems } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthenticationContext);
  const [deliveryCharge, setDeliveryCharge] = useState(5);
  const [cartAmount, setCartAmount] = useState(0);

  const { navigate } = useNavigation();

  // useFocusEffect(
  //   useCallback(() => {
  //     console.log("😱");
  //   }, [])
  // );
  // useEffect(() => {
  //   dispatch({
  //     type: UPDATE_CART_ITEMS_ON_LOAD,
  //     payload: { products },
  //   });
  // }, [products]);

  const getCartAmount = () => {
    const cartAmount = cartItems.reduce(
      (prevValue, product: CartItem) =>
        (prevValue += product.quantity * product.price),
      0
    );

    setCartAmount(cartAmount);
  };

  const getDelieveryCharge = () => {
    const productsWeight = cartItems.reduce(
      (prevValue, product: CartItem) =>
        (prevValue += product.quantity * product.weight),
      0
    );

    const deliveryCharge = calculateDeliveryCharge(productsWeight);
    setDeliveryCharge(deliveryCharge);
  };

  useEffect(() => {
    getCartAmount();
    getDelieveryCharge();
  }, [cartItems]);

  const onCheckout = () => {
    if (isAuthenticated) {
      navigate("AuthCheckout", { cartAmount, deliveryCharge });
    } else {
      navigate("CheckoutTypeSelect", { cartAmount, deliveryCharge });
    }
  };

  return (
    <SafeArea>
      <CartContainer>
        <Title>Количка</Title>
        {cartItems.length === 0 ? (
          <NoItemsInCart>
            <CartIcon icon="cart-off" />
            <Spacer position="top" size="large">
              <Caption>Нямате продукти в количката!</Caption>
            </Spacer>
          </NoItemsInCart>
        ) : (
          <>
            <CartItemList
              data={cartItems}
              keyExtractor={(item, index) => item.productId}
              renderItem={(item: { item: CartItem }) => (
                <CartItemCard cartItem={item.item} />
              )}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => (
                <CartSummary
                  amount={cartAmount}
                  deliveryCharge={deliveryCharge}
                />
              )}
            />
            <Button
              disabled={cartItems.length === 0}
              text="Към Поръчване"
              onButtonPress={onCheckout}
              containerStyles={{ margin: 8 }}
            />
          </>
        )}
      </CartContainer>
    </SafeArea>
  );
};
