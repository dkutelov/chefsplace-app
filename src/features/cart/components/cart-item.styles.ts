import styled from "styled-components/native";
import { Image, Pressable } from "react-native";

import { Theme } from "../../../types/Theme";

export const CartItemWrapper = styled.View`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  margin: ${(props: { theme: Theme }) => props.theme.space[2]};
  padding: ${(props: { theme: Theme }) => props.theme.space[3]}
    ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: 20px;
`;

export const TopContent = styled.View`
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const Title = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  text-align: left;
  line-height: 20px;
  flex: 1;
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[1]};
`;

export const ProductImage = styled(Image)`
  width: ${(props: { theme: Theme }) => props.theme.space[6]};
  height: ${(props: { theme: Theme }) => props.theme.space[6]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  border-bottom-left-radius: 20px;
`;

export const CardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[3]};
  height: 72px;
`;

export const Label = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.body};
  font-weight: ${(props: { theme: Theme }) => props.theme.fontWeights.regular};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const QuantityWrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PriceWrapper = styled.View`
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const PriceInnerWrapper = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

export const DeleteIcon = styled.Pressable`
  align-self: flex-end;
  justify-content: center;
  align-items: flex-end;
  border-color: ${(props: { theme: Theme }) => props.theme.colors.ui.secondary};
  border-width: 1px;
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: 18px;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
`;

export const Price = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.body};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
`;

export const PriceWith = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.body};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.caption};
`;
