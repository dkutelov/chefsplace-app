import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { Theme } from "../../../types/Theme";
import { colors } from "../../../infrastructure/theme/colors";

export const AuthButton = styled(Button).attrs({
  color: colors.ui.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const SecondaryAuthButton = styled(Button).attrs({
  color: colors.ui.orange,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput).attrs({
  activeUnderlineColor: colors.ui.primary,
})`
  width: 100%;
  background-color: transparent;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;
