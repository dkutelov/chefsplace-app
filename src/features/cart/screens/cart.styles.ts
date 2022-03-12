import { FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../../types/Theme";

export const NoItemsInCart = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CartItemList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;
