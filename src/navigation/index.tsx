import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../infrastructure/theme/colors";
import { RootStackParamList, RootTabParamList } from "../types/Navigation";
import LinkingConfiguration from "./LinkingConfiguration";
import { CartScreen } from "../features/cart/screens/cart.screen";
import { HomeScreen } from "../features/home/screens";
import { ProfileScreen } from "../features/profile/screens";
import { CategoriesScreen } from "../features/categories/screens/categories.screen";
import { ProductStack } from "./ProductStack";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
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
  return (
    <BottomTab.Navigator
      initialRouteName="Categories"
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
        })}
      />
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={() => ({
          title: "Категории",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-book" color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Products"
        component={ProductStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Количка",
          tabBarIcon: ({ color }) => <TabBarIcon name="cart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
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
