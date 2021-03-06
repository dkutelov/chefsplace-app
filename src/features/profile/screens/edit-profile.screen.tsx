import React, { useState } from "react";

import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { SafeArea } from "@components/utils/safe-area.component";
import { ProfileContainer } from "./profile.styles";
import { changePassword } from "@services/authentication/authentication.service";
import {
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "@features/account/components/account.styles";
import { Spacer, Text } from "@components";
import { colors } from "@infrastructure/theme/colors";
import { translatedError } from "@infrastructure/utils/firebase/translateFirebaseError";

export const EditProfileScreen = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onPasswordChange = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await changePassword(password);
      setShowSuccess(true);
    } catch (error) {
      const errorText = error.toString();
      const translatedErr = translatedError(errorText);
      setError(translatedErr || errorText);
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <SafeArea>
      <ProfileContainer>
        <Text variant="body">
          Тук може да смените паролата за вход във Вашия акаунт.
        </Text>
        <Spacer size="large">
          <AuthInput
            label="Нова Парола"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
            style={{ paddingHorizontal: 0, width: "100%" }}
          />
        </Spacer>
        <Spacer size="xl">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={onPasswordChange}
            >
              Промени Паролата
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={colors.ui.primary} />
          )}
        </Spacer>
        {error && <ErrorContainer size="large"></ErrorContainer>}
        {showSuccess && (
          <Spacer size="xl">
            <Text
              variant="body"
              style={{ textAlign: "center", color: colors.ui.primary }}
            >
              Вашата парола е успешно променена на "{password}"
            </Text>
          </Spacer>
        )}
      </ProfileContainer>
    </SafeArea>
  );
};
