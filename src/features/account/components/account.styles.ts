import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Theme } from "../../../types/Theme";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/images/bg-auth.jpeg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props: { theme: Theme }) => props.theme.space[4]};
  margin-top: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.ui.primary,
})`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[2]};
`;

export const SecondaryAuthButton = styled(Button).attrs({
  color: colors.ui.orange,
})`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput).attrs({
  activeUnderlineColor: colors.ui.primary,
})`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.body};
  width: 240px;
  background-color: transparent;
`;

export const Title = styled(Text)`
  text-align: center;
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
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

export const Notification = styled(Text)`
  text-align: center;
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  color: ${(props: { theme: Theme }) => props.theme.colors.bg.primary};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.caption}; ;
`;

export const ForgottenPassword = styled(Button).attrs({
  color: colors.monochromes.darkerGray,
  uppercase: false,
})`
  align-self: flex-end;
  margin-top: ${(props) => props.theme.space[0]};
`;
