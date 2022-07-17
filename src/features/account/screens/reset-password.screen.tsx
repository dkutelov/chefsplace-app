import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HelperText } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { Spacer } from "@components/spacer/spacer.component";
import { colors } from "@infrastructure/theme/colors";
import { sendResetPasswordEmail } from "@services/authentication/authentication.service";
import { Text } from "@components";

//TODO: Show password https://callstack.github.io/react-native-paper/text-input-icon.html
//TODO: Use login form component

export const ResetPasswordScreen = () => {
  const { goBack } = useNavigation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onForgotenPasswordPress = async () => {
    setError("");
    try {
      if (!email) {
        setError("Нужно е да въведете имейл за възстановяване на паролата");
      } else {
        await sendResetPasswordEmail(email);
        goBack();
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        setError("Не съществува акаунт с този имейл!");
      } else {
        setError("Грешка!");
      }
    }
  };
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer size="large" position="bottom">
          <Title>Забравена Парола</Title>
        </Spacer>

        <Spacer size="xl" position="top">
          <Text variant="body" style={{ textAlign: "center" }}>
            Въведете имейлът, с който е създаден Вашия акаунт и натиснете
            Промяна на парола. Ще получите имейл с линк, на който може да
            промените паролата.
          </Text>
        </Spacer>
        <Spacer size="xl" position="top">
          <AuthInput
            label="Имейл"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
            style={{ paddingHorizontal: 0 }}
          />
        </Spacer>
        <Spacer size="xl">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={onForgotenPasswordPress}
          >
            Промяна на парола
          </AuthButton>
        </Spacer>
        <Spacer position="top" size="large">
          <HelperText type="error" visible={error}>
            {error}
          </HelperText>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
