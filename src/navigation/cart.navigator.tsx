import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CartScreen } from "../features/cart/screens/cart.screen";
import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";
import { CheckoutTypeSelect } from "@features/checkout/screen/checkout-type-select.screen";
import { AuthCheckout } from "@features/checkout/screen/auth-checkout.screen";
import { GuestCheckout } from "@features/checkout/screen/guest/guest-checkout.screen";
import { DeliveryAddressScreen } from "@features/profile/screens/addresses/delivery/delivery-address.screen";
import { CreateInvoiceDataScreen } from "@features/profile/screens/addresses/invoice/create-invoice-data.screen";
import { NewInvoiceDataScreen } from "@features/profile/screens/addresses/invoice/new-invoice-data.screen";
import { Success } from "@features/checkout/screen/success.screen";
import { GuesDeliveryAddressScreen } from "@features/checkout/screen/guest/guest-delivery-address.screen";
import { GuestInvoiceAddressScreen } from "@features/checkout/screen/guest/guest-invoice-address.screen";
import { CheckoutErrorScreen } from "@features/checkout/screen/checkout-error.screen";
//import { CreditCardPaymentScreen } from "@features/checkout/screen/credit-card-payment.screen";
const Stack = createNativeStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
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
          name="NewGuestDeliveryAddress"
          component={GuesDeliveryAddressScreen}
          options={{ title: "Адрес За Доставка" }}
        />
        <Stack.Screen
          name="NewInvoiceDataAddress"
          component={NewInvoiceDataScreen}
          options={{ title: "Нови данни за фактура" }}
        />
        <Stack.Screen
          name="CreateInvoiceData"
          component={CreateInvoiceDataScreen}
          options={{ title: "Данни за Фактура" }}
        />
        <Stack.Screen
          name="NewGuestInvoiceAddress"
          component={GuestInvoiceAddressScreen}
          options={{ title: "Данни за Фактура" }}
        />
        {/* <Stack.Screen
          name="CreditCardPayment"
          component={CreditCardPaymentScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="CheckoutError"
          component={CheckoutErrorScreen}
          options={{
            headerShown: false,
          }}
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
