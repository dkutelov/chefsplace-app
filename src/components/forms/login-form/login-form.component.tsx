import { View, Text } from "react-native";
import React, { useState, useContext } from "react";
import { ActivityIndicator, TextInput } from "react-native-paper";

//Context
import { AuthenticationContext } from "@services";

//Sytles
import { AuthInput, AuthButton, ErrorContainer } from "./login-form.styles";

//Components
import { Spacer } from "@components/spacer/spacer.component";
import { colors } from "@infrastructure/theme/colors";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  const togglePassword = () => {
    setShowPassword((v) => !v);
  };

  return (
    <View>
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
          secureTextEntry={showPassword ? false : true}
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
          right={<TextInput.Icon name="eye" onPress={togglePassword} />}
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
            onPress={() => onLogin(email, password)}
            disabled={!email || !password}
          >
            Вход
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={colors.ui.primary} />
        )}
      </Spacer>
    </View>
  );
};

export default LoginForm;
