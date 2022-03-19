import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../../types/Theme";

export const NoItemsInWishlist = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WishlistItemList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;
