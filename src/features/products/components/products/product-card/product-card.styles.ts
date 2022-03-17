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
  flex: 0.5;
`;

export const CardContent = styled.View`
  flex: 0.5;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const Title = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.headingBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.subtitle};
  text-transform: capitalize;
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  margin-top: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  text-align: center;
  line-height: 20px;
`;

export const ProductImage = styled.Image`
  height: 155px;
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

export const CTARow = styled.View`
  margin: 0 ${(props: { theme: Theme }) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RoundIcon = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: 26px;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.ui.primary};
`;

export const WishlistIcon = styled(TouchableOpacity)``;
