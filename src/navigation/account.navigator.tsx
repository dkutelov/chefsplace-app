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
import { OrderAgainScreen } from "@features/profile/screens/orders/order-again.screen";
import { EditProfileScreen } from "@features/profile/screens/edit-profile.screen";
import { ResetPasswordScreen } from "@features/account/screens/reset-password.screen";
import { ContactScreen } from "@features/profile/screens/contact.screen.tsx";
import { TermScreen } from "@features/profile/screens/term.screen.tsx";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
  const { isAuthenticated } = React.useContext(AuthenticationContext);
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="Main"
        component={ProfileScreen}
        options={{
          headerShown: isAuthenticated,
          title: "Моя Профил",
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgottenPassword"
        component={ResetPasswordScreen}
        options={{ title: "Промяна на парола" }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ title: "Смяна на парола" }}
      />

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
        name="OrderAgain"
        component={OrderAgainScreen}
        options={{ title: "Моите Поръчки" }}
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

      <Stack.Screen
        name="Terms"
        component={TermScreen}
        options={{ title: "Общи условия" }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: "Контакти" }}
      />
    </Stack.Navigator>
  );
};
