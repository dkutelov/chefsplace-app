import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductListScreen } from "../features/products/screens/products.screen";
import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";

const Stack = createNativeStackNavigator();

export const ProductStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProductsScreen" component={ProductListScreen} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreenWrapper}
      />
    </Stack.Navigator>
  );
};
