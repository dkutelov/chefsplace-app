import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { Theme } from "../../types/Theme";

export const AddToCardContainer = styled(TouchableOpacity)`
  width: ${(props) => props.size + 16}px;
  height: ${(props) => props.size + 16}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.size + 16}px;
  background-color: ${({
    theme,
    disabled,
  }: {
    theme: Theme;
    disabled: boolean;
  }) => (disabled ? theme.colors.ui.disabled : theme.colors.ui.primary)};
`;
//8px -> 16px
