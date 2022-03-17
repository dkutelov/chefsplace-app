import styled from "styled-components/native";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Theme } from "../../../../../types/Theme";

export const ProductFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`
  flex: 1;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;

export const NoProductsMessage = styled.Text`
  text-align: center;
  margin-top: ${(props: { theme: Theme }) => props.theme.space[3]};
`;
