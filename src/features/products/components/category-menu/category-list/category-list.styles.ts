import styled from "styled-components/native";
import { FlatList } from "react-native";

import { Theme } from "../../../../../types/Theme";

export const ContainerView = styled.View`
  margin: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
  padding: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
  background-color: ${(props: { theme: Theme }) => props.theme.colors.bg.gray};
`;

export const CategoryFlatList = styled(FlatList)`
  margin: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
`;
