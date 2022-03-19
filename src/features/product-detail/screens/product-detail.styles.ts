import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Theme } from "../../../types/Theme";

export const ProductScrollView = styled(ScrollView)`
  flex: 1;
  padding-top: ${(props: { theme: Theme }) => props.theme.space[4]};
`;

export const Title = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.title};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  text-align: center;
  line-height: 20px;
  letter-spacing: -1px;
`;

export const ShortDescription = styled.Text`
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const Row = styled.View`
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const ActionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${(props: { theme: Theme }) => props.theme.space[3]}
    ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const WishlistAndPriceRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const PriceRow = styled.View`
  flex-direction: column;
  align-items: flex-end;
  margin: 0 ${(props: { theme: Theme }) => props.theme.space[3]} 22px;
`;

export const Description = styled.Text`
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const PriceInnerWrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const Price = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.bodyBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.h4};
`;

export const PriceDescriptior = styled.Text`
  margin-left: ${(props: { theme: Theme }) => props.theme.space[2]};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.caption};
`;

export const PriceWith = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.body};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.caption};
  margin-left: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-top: ${(props: { theme: Theme }) => props.theme.space[0]};
`;

export const NotEnoughQuantityNotifivation = styled.Text`
  text-align: left;
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.error};
  position: absolute;
  bottom: -12px;
  left: 0;
`;
