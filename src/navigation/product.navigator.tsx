import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, Platform } from "react-native";

import { ProductListScreen } from "../features/products/screens/products.screen";
import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";
import Search from "../features/products/components/search/search.component";
import { fonts, fontSizes } from "../infrastructure/theme/fonts";

const Stack = createNativeStackNavigator();
const isAndroid = Platform.OS === "android";

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
          title: "Информация За Продукта",
          headerTitleStyle: {
            fontFamily: fonts.body,
            fontSize: isAndroid ? 16 : fontSizes.body,
          },
        }}
      />
      <Stack.Screen
        name="SimilarProductDetails"
        component={ProductDetailScreenWrapper}
        options={{
          title: "Информация За Продукта",
          headerTitleStyle: {
            fontFamily: fonts.body,
            fontSize: isAndroid ? 16 : fontSizes.body,
          },
        }}
      />
    </Stack.Navigator>
  );
};
