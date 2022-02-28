import styled from "styled-components/native";
import { Pressable } from "react-native";

import { Theme } from "../../types/Theme";

export const Root = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${(props: { theme: Theme }) => props.theme.colors.ui.secondary};
  background-color: white;
  border-radius: 10px;
  padding: 4px;
`;

export const ActionIcon = styled(Pressable)`
    width: 35px;
    height: 35px
    align-items: center;
    justify-content: center;
`;

export const Quantity = styled.Text`
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  width: 30px;
  text-align: center;
`;
