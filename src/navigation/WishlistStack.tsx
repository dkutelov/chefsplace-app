import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { WishlistScreen } from "../features/wishlist/screen/wishlist.screen";
import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";

const Stack = createNativeStackNavigator();

export const WishlistStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WishlistScreen"
        component={WishlistScreen}
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
      </Stack.Group>
    </Stack.Navigator>
  );
};
