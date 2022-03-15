import styled from "styled-components/native";
import { FlatList } from "react-native";

import { Theme } from "../../../../../types/Theme";

export const ContainerView = styled.View`
  margin-top: ${(props: { theme: Theme }) => props.theme.space[1]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  background-color: ${(props: { theme: Theme }) => props.theme.colors.bg.gray};
  border-top-width: 1px;
  border-top-color: ${(props: { theme: Theme }) =>
    props.theme.colors.ui.quaternary};
  border-bottom-width: 1px;
  border-bottom-color: ${(props: { theme: Theme }) =>
    props.theme.colors.ui.quaternary};
`;

export const CategoryFlatList = styled(FlatList)`
  margin: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
`;
