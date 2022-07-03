import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CartScreen } from "../features/cart/screens/cart.screen";
import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";
import { CheckoutTypeSelect } from "@features/checkout/screen/checkout-type-select.screen";
import { AuthCheckout } from "@features/checkout/screen/auth-checkout.screen";
import { GuestCheckout } from "@features/checkout/screen/guest-checkout.screen";
import { DeliveryAddressScreen } from "@features/profile/screens/addresses/delivery/delivery-address.screen";
import { CreateInvoiceDataScreen } from "@features/profile/screens/addresses/invoice/create-invoice-data.screen";
import { NewInvoiceDataScreen } from "@features/profile/screens/addresses/invoice/new-invoice-data.screen";
import { Success } from "@features/checkout/screen/success.screen";

const Stack = createNativeStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailScreenWrapper}
          options={{
            title: "Детайли",
          }}
        />
        <Stack.Screen
          name="SimilarProductDetails"
          component={ProductDetailScreenWrapper}
          options={{
            title: "Детайли",
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="CheckoutTypeSelect"
          component={CheckoutTypeSelect}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GuestCheckout"
          component={GuestCheckout}
          options={{
            title: "Поръчване Като Гост",
          }}
        />
        <Stack.Screen
          name="AuthCheckout"
          component={AuthCheckout}
          options={{
            title: "Поръчване",
          }}
        />
        <Stack.Screen
          name="NewDeliveryAddress"
          component={DeliveryAddressScreen}
          options={{ title: "Нов Адрес За Доставка" }}
        />
        <Stack.Screen
          name="NewInvoiceDataAddress"
          component={NewInvoiceDataScreen}
          options={{ title: "Нови данни за фактура" }}
        />
        <Stack.Screen
          name="CreateInvoiceData"
          component={CreateInvoiceDataScreen}
          options={{ title: "Нов Адрес За Доставка" }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
