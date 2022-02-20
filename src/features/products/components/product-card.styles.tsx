import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Card } from "react-native-paper";
import { View } from "react-native";

import { Theme } from "../../../types/Theme";

export const ProductCardWrapper = styled(Card)`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const CardContent = styled.View`
  padding-left: ${(props: { theme: Theme }) => props.theme.space[3]};
  padding-right: ${(props: { theme: Theme }) => props.theme.space[3]};
  flex: 0.6;
`;

export const Title = styled(Text)`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  padding-top: ${(props: { theme: Theme }) => props.theme.space[3]};
  padding-left: ${(props: { theme: Theme }) => props.theme.space[4]};
  padding-right: ${(props: { theme: Theme }) => props.theme.space[4]};
`;

export const ProductImage = styled(Card.Cover)`
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  flex: 0.4;
`;

export const Price = styled(Text)`
  margin-top: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const ShortDescription = styled(Text)`
  margin-top: ${(props: { theme: Theme }) => props.theme.space[2]};
`;
