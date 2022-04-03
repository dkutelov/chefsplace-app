import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";

import { Theme } from "@types/Theme";

export const ViewFieldContainer = styled.View`
  flex-direction: column;
  background-color: transparent;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
  border-bottom-width: 1px;
  border-bottom-color: ${(props: { theme: Theme }) =>
    props.theme.colors.monochromes.darkGray};
`;

export const Label = styled.Text`
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.caption};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  text-align: left;
  padding-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const Content = styled.Text`
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;
