import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationContext } from "@services/authentication/authentication.context";

import { RegisterScreen } from "@features/account/screens/register.screen";
import { ProfileScreen } from "@features/profile/screens/profile.screen";
import { AddressScreen } from "@features/profile/screens/address.screen";
import { AddressListScreen } from "@features/profile/screens/address-list.screen";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
  const { isAuthenticated } = React.useContext(AuthenticationContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={ProfileScreen}
        options={{
          headerShown: isAuthenticated,
          title: "Моя Профил",
        }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="DeliveryAddressList"
        component={AddressListScreen}
        options={{ title: "Адреси За Доставка" }}
      />
      <Stack.Screen
        name="NewDeliveryAddress"
        component={AddressScreen}
        options={{ title: "Адрес За Доставка" }}
      />
    </Stack.Navigator>
  );
};
