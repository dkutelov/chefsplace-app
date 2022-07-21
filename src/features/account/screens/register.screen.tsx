import React, { useState, useEffect, useContext, useCallback } from "react";
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
} from "../components/account.styles";
import { Text, Spacer } from "@components";
import { AuthenticationContext } from "@services/authentication/authentication.context";
import { colors } from "@infrastructure/theme/colors";

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const { onRegister, isAuthenticated, error, isLoading, clearError, profile } =
    useContext(AuthenticationContext);

  useFocusEffect(
    useCallback(() => {
      setEmail("");
      setPassword("");
      setRepeatedPassword("");
      clearError();
    }, [])
  );

  useEffect(() => {
    if (!profile) {
      return;
    }
    navigation.goBack();
  }, [profile]);

  const togglePasswordVisibility = () => {
    setShowPassword((v) => !v);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword((v) => !v);
  };

  const onRegisterPress = () => {
    onRegister(email, password, repeatedPassword);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer size="large" position="bottom">
          <Title>РЕГИСТРАЦИЯ</Title>
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
            style={{ paddingHorizontal: 0, width: "100%" }}
            right={
              <TextInput.Icon name="eye" onPress={togglePasswordVisibility} />
            }
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Потвърди Парола"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry={showRePassword ? false : true}
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
            style={{ paddingHorizontal: 0, width: "100%" }}
            right={
              <TextInput.Icon name="eye" onPress={toggleRePasswordVisibility} />
            }
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
              disabled={
                email === "" || password === "" || repeatedPassword === ""
              }
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
