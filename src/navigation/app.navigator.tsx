import * as React from "react";
import { SafeAreaView, Image, Platform } from "react-native";

// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// Tab Icons
import { TabBarIcon } from "./components/tabbar-icons/tabbar-icon.component";
import { TabIconWithBadge } from "./components/tabbar-icons/tabbar-icon-with-badge.component";

// Screens, stack navigators
import { HomeStack } from "./home.navigator";
import { AccountNavigator } from "./account.navigator";
import { ProductStack } from "./product.navigator";
import { CartStack } from "./cart.navigator";
import { WishlistStack } from "./wishlist.navigator";

// Context
import { CartContext } from "../services/cart/cart.context";
import { WishlistContext } from "../services/wishlist/wishlist.context";

import { colors } from "../infrastructure/theme/colors";
import { RootTabParamList } from "../types/Navigation";

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { cartItems } = React.useContext(CartContext);
  const { wishlistItems } = React.useContext(WishlistContext);

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.ui.primary,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={() => ({
          title: "Начало",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="Products"
        component={ProductStack}
        options={{
          title: "Продукти",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Wishlist"
        component={WishlistStack}
        options={() => ({
          title: "Желани",
          tabBarIcon: ({ color }) => (
            <TabIconWithBadge
              name="heart"
              color={color}
              count={wishlistItems.length}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIconWithBadge
              name="cart"
              color={color}
              count={cartItems.reduce<number>(
                (prev, curr) => prev + curr.quantity,
                0
              )}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
