import * as React from "react";
import { SafeAreaView, Image } from "react-native";

// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// Tab Icons
import { TabBarIcon } from "./components/tabbar-icons/tabbar-icon.component";

// Screens, stack navigators
import { AccountNavigator } from "./account.navigator";
import { ProductStack } from "./product.navigator";
import { CartStack } from "./CartStack";
import { HomeScreen } from "../features/home/screens/home.screen";
import { WishlistStack } from "./wishlist.navigator";

// Context
import { AuthenticationContext } from "../services/authentication/authentication.context";

import { colors } from "../infrastructure/theme/colors";
import { RootStackParamList, RootTabParamList } from "../types/Navigation";

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* <RootNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { isAuthenticated } = React.useContext(AuthenticationContext);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.ui.primary,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          title: "Начало",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          header: () => (
            <SafeAreaView>
              <Image
                source={require("../../assets/images/logo.png")}
                style={{
                  height: 60,
                  width: 134,
                  resizeMode: "contain",
                  alignSelf: "center",
                  marginBottom: 8,
                }}
              />
            </SafeAreaView>
          ),
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
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartStack}
        options={{
          title: "Количка",
          tabBarIcon: ({ color }) => <TabBarIcon name="cart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={AccountNavigator}
        options={{
          headerShown: isAuthenticated,
          title: "Профил",
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// <BottomTab.Screen
//   name="Cart"
//   component={CartStack}
//   options={{
//     title: "Количка",
//     tabBarIcon: ({ color }) => <TabBarIcon name="cart" color={color} />,
//   }}
// />;
