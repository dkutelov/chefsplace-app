import React, { useState, useContext } from "react";
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

export const LoginScreen = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer size="large" position="bottom">
          <Title>Вход</Title>
        </Spacer>
        <AuthInput
          label="Имейл"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Парола"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
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
              onPress={() => onLogin(email, password)}
            >
              Вход
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={colors.ui.primary} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="xl" position="top">
        <Text
          variant="caption"
          style={{ textAlign: "center" }}
          style={{ color: colors.bg.primary }}
        >
          Ако нямате профил, направете регистрация тук.
        </Text>
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
