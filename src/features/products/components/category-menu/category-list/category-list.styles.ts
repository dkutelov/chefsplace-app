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
  padding: ${(props: { theme: Theme }) => props.theme.space[2]} 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  margin-right: ${(props: { theme: Theme }) => props.theme.space[2]};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.orange};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.headingBold};
  text-transform: uppercase;
`;

export const CategoryNameWrapper = styled.View`
  margin: ${(props: { theme: Theme }) => props.theme.space[1]}
    ${(props: { theme: Theme }) => props.theme.space[2]} 0;
  height: 35px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const CategoryName = styled.Text`
  flex-basis: 90%;
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  padding-left: ${(props: { theme: Theme }) => props.theme.space[2]};
`;
export const NoCategory = styled.Text`
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.button};
`;

export const NoCategoryWrapper = styled.View`
  height: 30px;
  margin: ${(props: { theme: Theme }) => props.theme.space[1]}
    ${(props: { theme: Theme }) => props.theme.space[2]} 0;
  align-items: flex-start;
  justify-content: center;
`;
