import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, Platform, Image } from "react-native";

import { HomeScreen } from "../features/home/screens/home.screen";
import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";
import Search from "../features/products/components/search/search.component";
import { fonts, fontSizes } from "../infrastructure/theme/fonts";

const Stack = createNativeStackNavigator();
const isAndroid = Platform.OS === "android";

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => (
            <SafeAreaView>
              <Image
                source={require("../../assets/images/logo.png")}
                style={{
                  height: 60,
                  width: 134,
                  resizeMode: "contain",
                  alignSelf: "center",
                  marginTop: Platform.OS === "ios" ? 0 : 32,
                }}
              />
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
