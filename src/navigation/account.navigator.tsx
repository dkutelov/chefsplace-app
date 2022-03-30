import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterScreen } from "../features/account/screens/register.screen";
import { ProfileScreen } from "../features/profile/screens/profile.screen";
import { AddressScreen } from "../features/profile/screens/address.screen";

const Stack = createNativeStackNavigator();

//TODO: isAuthenticated -> headerShown false
export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={ProfileScreen}
      options={{ title: "Моя Профил" }}
    />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen
      name="NewDeliveryAddress"
      component={AddressScreen}
      options={{ title: "Адрес За Доставка" }}
    />
  </Stack.Navigator>
);
