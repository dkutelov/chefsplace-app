import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationContext } from "@services/authentication/authentication.context";

import { RegisterScreen } from "@features/account/screens/register.screen";
import { ProfileScreen } from "@features/profile/screens/profile.screen";
import { DeliveryAddressScreen } from "@features/profile/screens/addresses/delivery/delivery-address.screen";
import { DeliveryAddressListScreen } from "@features/profile/screens/addresses/delivery/address-list.screen";
import { InvoiceDetailsListScreen } from "@features/profile/screens/addresses/invoice/invoice-details.list.screen";
import { DeliveryAddressShowScreen } from "@features/profile/screens/addresses/delivery/address-show.screen";
import { NewInvoiceDataScreen } from "@features/profile/screens/addresses/invoice/new-invoice-data.screen";
import { CreateInvoiceDataScreen } from "@features/profile/screens/addresses/invoice/create-invoice-data.screen";
import { InvoiceAddressShowScreen } from "@features/profile/screens/addresses/invoice/invoice-address-show.screen";
import { OrdersScreen } from "@features/profile/screens/orders/orders-list.screen";
import { OrderDetailScreen } from "@features/profile/screens/orders/order-detail.screen";

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
        name="OrderList"
        component={OrdersScreen}
        options={{ title: "Моите Поръчки" }}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetailScreen}
        options={{ title: "Детайли за поръчката" }}
      />
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
      <Stack.Screen
        name="InvoiceAddressList"
        component={InvoiceDetailsListScreen}
        options={{ title: "Данни за фактура" }}
      />
      <Stack.Screen
        name="NewInvoiceDataAddress"
        component={NewInvoiceDataScreen}
        options={{ title: "Нови данни за фактура" }}
      />
      <Stack.Screen
        name="CreateInvoiceData"
        component={CreateInvoiceDataScreen}
        options={{ title: "Данни за фактура" }}
      />
      <Stack.Screen
        name="ViewInvoiceAddress"
        component={InvoiceAddressShowScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack.Navigator>
  );
};
