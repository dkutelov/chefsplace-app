import styled from "styled-components/native";

import { Theme } from "../../../types/Theme";

export const CheckBoxContainer = styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding: ${(props: { theme: Theme }) => props.theme.space[3]} 0;
`;

export const CheckBoxIconContainer = styled.View``;
export const Label = styled.Text`
  padding-left: ${(props: { theme: Theme }) => props.theme.space[2]};
`;
