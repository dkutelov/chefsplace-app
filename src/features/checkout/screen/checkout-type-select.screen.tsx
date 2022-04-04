import LoginForm from "@components/forms/login-form/login-form.component";
import React from "react";
import { View, Text } from "react-native";
import { TypeSelectBackground } from "../components/checkout-type-select.styles";

export const CheckoutTypeSelect = () => {
  return (
    <TypeSelectBackground>
      <Text>Checkout Select</Text>
      <LoginForm />
    </TypeSelectBackground>
  );
};
