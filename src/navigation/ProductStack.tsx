import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";

import { ProductListScreen } from "../features/products/screens/products.screen";
import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";
import Search from "../features/products/components/search.component";

const Stack = createNativeStackNavigator();

export const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsScreen"
        component={ProductListScreen}
        options={{
          title: "Home",
          header: () => (
            <SafeAreaView>
              <Search />
            </SafeAreaView>
          ),
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
