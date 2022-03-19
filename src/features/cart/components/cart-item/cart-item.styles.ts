import styled from "styled-components/native";
import { Image } from "react-native";

import { Theme } from "../../../../types/Theme";

export const CartItemWrapper = styled.View`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  border-radius: 20px;
`;

export const TopContent = styled.View`
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
`;

export const PriceWrapper = styled.View`
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const AmountWrapper = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

export const PriceInnerWrapper = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

export const DeleteIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-end;
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: 18px;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  margin-top: -8px;
`;

export const Price = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.bodyBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.title};
`;

export const PriceWith = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.body};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.caption};
`;

export const Amount = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.bodyBold};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.primary};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
`;
