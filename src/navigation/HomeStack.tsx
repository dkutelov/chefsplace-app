import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";
import { HomeScreen } from "../features/home/screens/home.screen";
import { Image, SafeAreaView } from "react-native";
import { K } from "../infrastructure/constants";
import { ProductListScreen } from "../features/products/screens/products.screen";
import Search from "../features/products/components/search.component";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => (
            <SafeAreaView style={{ backgroundColor: "white" }}>
              <Image
                source={{
                  uri: K.brandLogo,
                }}
                style={{
                  height: 70,
                  width: 200,
                  resizeMode: "contain",
                  alignSelf: "center",
                  marginBottom: 8,
                }}
              />
            </SafeAreaView>
          ),
        }}
      />
      <Stack.Screen
        name="ProductsScreen"
        component={ProductListScreen}
        options={{
          title: "Категория",
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
