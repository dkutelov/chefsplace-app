import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  SecondaryAuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isAuthenticated, error, isLoading } = useContext(
    AuthenticationContext
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigation.goBack();
    }
  }, [isAuthenticated]);

  const onRegisterPress = () => {
    onRegister(email, password, repeatedPassword);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer size="large" position="bottom">
          <Title>Регистрация</Title>
        </Spacer>
        <AuthInput
          label="Имейл"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
          style={{ paddingHorizontal: 0 }}
        />
        <Spacer size="large">
          <AuthInput
            label="Парола"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
            style={{ paddingHorizontal: 0 }}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Потвърди Парола"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
            style={{ paddingHorizontal: 0 }}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="xl">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={onRegisterPress}
            >
              Регистрация
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={colors.ui.primary} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="xl">
        <SecondaryAuthButton
          icon="arrow-left-bold"
          mode="contained"
          labelStyle={{ color: colors.bg.primary }}
          onPress={() => navigation.goBack()}
        >
          Обратно
        </SecondaryAuthButton>
      </Spacer>
    </AccountBackground>
  );
};
