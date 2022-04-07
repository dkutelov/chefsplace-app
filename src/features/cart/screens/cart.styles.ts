import { FlatList, Platform } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../../types/Theme";

export const CartContainer = styled.View`
  flex: 1;
  margin-top: ${Platform.OS === "ios" ? 0 : 36}px;
`;

export const NoItemsInCart = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CartItemList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;

export const Title = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.headingBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.title};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.primary};
  margin-top: ${(props: { theme: Theme }) => props.theme.space[1]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
`;
