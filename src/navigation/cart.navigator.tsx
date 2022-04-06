import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CartScreen } from "../features/cart/screens/cart.screen";
import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";
import { CheckoutTypeSelect } from "@features/checkout/screen/checkout-type-select.screen";
import { AuthCheckout } from "@features/checkout/screen/auth-checkout.screen";
import { GuestCheckout } from "@features/checkout/screen/guest-checkout.screen";

const Stack = createNativeStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailScreenWrapper}
          options={{
            title: "Детайли",
          }}
        />
        <Stack.Screen
          name="SimilarProductDetails"
          component={ProductDetailScreenWrapper}
          options={{
            title: "Детайли",
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="CheckoutTypeSelect"
          component={CheckoutTypeSelect}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GuestCheckout"
          component={GuestCheckout}
          options={{
            title: "Поръчване Като Гост",
          }}
        />
        <Stack.Screen
          name="ç"
          component={AuthCheckout}
          options={{
            title: "Поръчване",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
