import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../infrastructure/theme/colors";
import { RootStackParamList, RootTabParamList } from "../types/Navigation";
import { ProfileScreen } from "../features/profile/screens/profile.screen";
import { ProductStack } from "./product.navigator";
import { CartStack } from "./CartStack";
import { HomeScreen } from "../features/home/screens/home.screen";
import { WishlistStack } from "./wishlist.navigator";
import { AuthenticationContext } from "../services/authentication/authentication.context";

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* <RootNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        component={ProfileScreen}
        options={{
          headerShown: isAuthenticated,
          title: "Профил",
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
}
