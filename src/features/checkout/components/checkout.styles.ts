import styled from "styled-components/native";
import { Avatar } from "react-native-paper";

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.theme.colors.ui.error};
`;

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
