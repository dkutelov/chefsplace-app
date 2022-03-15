import styled from "styled-components/native";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Theme } from "../../../types/Theme";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const ProductList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`
  flex: 1;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;

export const Search = styled.View`
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;
