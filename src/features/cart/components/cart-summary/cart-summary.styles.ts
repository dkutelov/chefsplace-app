import styled from "styled-components/native";
import { Image } from "react-native";

import { Theme } from "../../../../types/Theme";

export const CartSummaryWrapper = styled.View`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.headingBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[1]};
  text-transform: uppercase;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const Label = styled.Text``;
export const Value = styled.Text``;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;
