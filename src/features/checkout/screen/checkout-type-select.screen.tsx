import React, { useContext, useEffect } from "react";
import LoginForm from "@components/forms/login-form/login-form.component";
import { AuthenticationContext } from "@services";
import { Text } from "@components/typography/text.component";
import {
  TypeSelectBackground,
  ContentContainer,
  AuthButton,
  Title,
} from "../components/checkout-type-select.styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Spacer } from "@components/spacer/spacer.component";

export const CheckoutTypeSelect = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const { navigate } = useNavigation();
  const { params } = useRoute();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("AuthCheckout");
    }
  }, [isAuthenticated]);

  const onGuestOrderButtonPressed = () => {
    navigate("GuestCheckout", { ...params });
  };

  return (
    <TypeSelectBackground>
      <ContentContainer>
        <Title>Вход</Title>
        <LoginForm />

        <Spacer position="top" size="large">
          <Text variant="body" style={{ textAlign: "center" }}>
            или
          </Text>
        </Spacer>

        <Spacer position="top" size="large">
          <AuthButton
            icon="arrow-right-bold"
            mode="contained"
            onPress={onGuestOrderButtonPressed}
          >
            Поръчай като Гост
          </AuthButton>
        </Spacer>
      </ContentContainer>
    </TypeSelectBackground>
  );
};
