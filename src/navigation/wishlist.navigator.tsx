import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../infrastructure/theme/colors";
import { fontSizes, fonts } from "../infrastructure/theme/fonts";
import { WishlistScreen } from "../features/wishlist/screen/wishlist.screen";
import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";

const Stack = createNativeStackNavigator();
const isAndroid = Platform.OS === "android";

const CustomHeading = ({ route }) => ({
  title: route.params.name,
  headerStyle: {
    backgroundColor: colors.bg.secondary,
  },
  headerTintColor: colors.ui.primary,
  headerTitleStyle: {
    fontFamily: fonts.heading,
    fontSize: isAndroid ? 16 : fontSizes.body,
  },
});

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
          name="ProductDetail"
          component={ProductDetailScreenWrapper}
          options={CustomHeading}
        />
        <Stack.Screen
          name="SimilarProductDetails"
          component={ProductDetailScreenWrapper}
          options={CustomHeading}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
