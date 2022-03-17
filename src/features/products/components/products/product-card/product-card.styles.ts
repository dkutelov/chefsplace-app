import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Text } from "../../../../../components/typography/text.component";
import { Card } from "react-native-paper";

import { Theme } from "../../../../../types/Theme";

export const ProductCardWrapper = styled(TouchableOpacity)`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  flex-direction: column;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const ProductImageWrapper = styled.View`
  flex-direction: column;
  flex: 0.55;
`;

export const CardContent = styled.View`
  flex: 0.45;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const Title = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.title};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  margin-top: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
  text-align: center;
  line-height: 20px;
  letter-spacing: -1px;
`;

export const ProductImage = styled(Card.Cover)`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  border-bottom-left-radius: 20px;
`;

export const PriceWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export const PriceInnerWrapper = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

export const Price = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.bodyBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.h5};
`;

export const PriceWith = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.bodyBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.button};
  margin-left: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-top: ${(props: { theme: Theme }) => props.theme.space[1]};
`;

export const PriceDescriptior = styled.Text`
  margin-left: ${(props: { theme: Theme }) => props.theme.space[2]};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.subtleGray};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.caption};
`;

export const ShortDescription = styled(Text)``;

export const RoundIcon = styled(TouchableOpacity)`
  align-self: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: 22px;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.ui.primary};
`;
