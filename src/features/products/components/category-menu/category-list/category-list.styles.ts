import styled from "styled-components/native";
import { FlatList, Pressable } from "react-native";

import { Theme } from "../../../../../types/Theme";

export const ContainerView = styled.View`
  margin: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
  padding: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
  background-color: ${(props: { theme: Theme }) => props.theme.colors.bg.gray};
`;

export const CategoryTitleContainer = styled(Pressable)`
  padding: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  margin-right: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const ClearContainer = styled(Pressable)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ClearLabel = styled.Text`
  margin-left: ${(props: { theme: Theme }) => props.theme.space[1]};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.caption};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.orange}; ;
`;

export const CategoryFlatList = styled(FlatList)`
  margin: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
`;
