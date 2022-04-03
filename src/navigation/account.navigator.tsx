import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationContext } from "@services/authentication/authentication.context";

import { RegisterScreen } from "@features/account/screens/register.screen";
import { ProfileScreen } from "@features/profile/screens/profile.screen";
import { DeliveryAddressScreen } from "@features/profile/screens/addresses/delivery/delivery-address.screen";
import { DeliveryAddressListScreen } from "@features/profile/screens/addresses/delivery/address-list.screen";
import { DeliveryAddressShowScreen } from "@features/profile/screens/addresses/delivery/address-show.screen";

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
        component={DeliveryAddressListScreen}
        options={{ title: "Адреси За Доставка" }}
      />
      <Stack.Screen
        name="ViewAddress"
        component={DeliveryAddressShowScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="NewDeliveryAddress"
        component={DeliveryAddressScreen}
        options={{ title: "Адрес За Доставка" }}
      />
    </Stack.Navigator>
  );
};
