import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { Theme } from "../../../types/Theme";
import { colors } from "@infrastructure/theme/colors";

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SuccessTitle = styled.Text`
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.h4};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  font-weight: ${(props: { theme: Theme }) => props.theme.fontWeights.bold};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[4]};
`;

export const SuccessMessage = styled.Text`
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.primary};
  margin: ${(props: { theme: Theme }) => props.theme.space[3]}
    ${(props: { theme: Theme }) => props.theme.space[5]} 0;
  text-align: center;
`;

export const HomeButton = styled(Button).attrs({
  color: colors.bg.primary,
})`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding-bottom: ${(props) => props.theme.space[1]};
  margin-top: ${(props) => props.theme.space[5]};
`;
