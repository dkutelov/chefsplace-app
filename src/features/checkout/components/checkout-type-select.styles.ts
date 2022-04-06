import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { Text } from "@components/typography/text.component";
import { Theme } from "@types/Theme";
import { colors } from "@infrastructure/theme/colors";

export const TypeSelectBackground = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props: { theme: Theme }) => props.theme.space[4]};
  margin: ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

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
  width: 300px;
  background-color: transparent;
`;

export const Title = styled(Text)`
  text-align: center;
  font-size: 30px;
  color: ${(props: { theme: Theme }) => props.theme.colors.text.primary};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;
