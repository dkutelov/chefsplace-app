import styled from "styled-components/native";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Theme } from "../../../types/Theme";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const ProductList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
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
