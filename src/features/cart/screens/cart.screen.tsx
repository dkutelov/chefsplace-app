import React, { useContext } from "react";
import { View, Text } from "react-native";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";

export const CartScreen = () => {
  const { cartItems, isLoading, error } = useContext(CartContext);
  console.warn(cartItems);

  return (
    <SafeArea>
      <View>
        <Text>Your cart is empty! </Text>
      </View>
    </SafeArea>
  );
};
