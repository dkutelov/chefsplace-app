import styled from "styled-components/native";
import { FlatList, Pressable } from "react-native";

import { Theme } from "../../../../../types/Theme";

export const ContainerView = styled.View`
  margin: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #fff;
  border-top-width: 3px;
  border-bottom-width: 3px;
  border-color: white;
`;

export const CategoryTitleContainer = styled(Pressable)`
  padding: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  margin-right: ${(props: { theme: Theme }) => props.theme.space[2]};
  color: ${(props: { theme: Theme }) => props.theme.colors.monochromes.onyx};
`;

export const CategoryFlatList = styled(FlatList)``;
