import React, { useState, useContext, useCallback } from "react";
import { Dimensions } from "react-native";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  SecondaryAuthButton,
  AuthInput,
  Title,
  ErrorContainer,
  Notification,
  ForgottenPassword,
} from "../components/account.styles";
import { Text, Spacer } from "@components";
import { AuthenticationContext } from "@services";
import { colors } from "@infrastructure/theme/colors";

export const LoginScreen = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { onLogin, isLoading, error, clearError } = useContext(
    AuthenticationContext
  );

  useFocusEffect(
    useCallback(() => {
      clearError();
      setEmail("");
      setPassword("");
    }, [])
  );

  const togglePasswordVisibility = () => {
    setShowPassword((v) => !v);
  };

  const onLoginPress = () => {
    onLogin(email, password);
  };

  const onForgotenPasswordPress = async () => {
    navigate("ForgottenPassword");
  };

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer size="large" position="bottom">
          <Title>ВХОД</Title>
        </Spacer>
        <AuthInput
          label="Имейл"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
          style={{
            paddingHorizontal: 0,
            width: Dimensions.get("window").width * 0.8,
          }}
        />
        <Spacer size="large">
          <AuthInput
            label="Парола"
            value={password}
            textContentType="password"
            secureTextEntry={showPassword ? false : true}
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
            right={
              <TextInput.Icon name="eye" onPress={togglePasswordVisibility} />
            }
            style={{ paddingHorizontal: 0, width: "100%" }}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Spacer position="top" size="medium">
              <Text variant="error">{error}</Text>
            </Spacer>
          </ErrorContainer>
        )}
        <Spacer size="xl">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={onLoginPress}
              disabled={email === "" || password === ""}
            >
              Вход
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={colors.ui.primary} />
          )}
        </Spacer>
        <ForgottenPassword onPress={onForgotenPasswordPress}>
          Забравена парола
        </ForgottenPassword>
      </AccountContainer>
      <Spacer size="xl" position="top">
        <Notification>
          Ако нямате профил, направете регистрация тук.
        </Notification>
      </Spacer>
      <Spacer size="large" position="top">
        <SecondaryAuthButton
          icon="door"
          mode="contained"
          labelStyle={{ color: colors.bg.primary }}
          onPress={() => navigate("Register")}
        >
          Регистрация
        </SecondaryAuthButton>
      </Spacer>
    </AccountBackground>
  );
};
