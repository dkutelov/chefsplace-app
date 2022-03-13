import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";
import { HomeScreen } from "../features/home/screens/home.screen";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreenWrapper}
        options={{
          title: "Детайли",
        }}
      />
    </Stack.Navigator>
  );
};
