import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

import { colors } from "../../../infrastructure/theme/colors";
import { Theme } from "../../../types/Theme";

export const FieldsContainer = styled.View`
  padding: ${(props: { theme: Theme }) => props.theme.space[4]};
`;

export const InputField = styled(TextInput).attrs({
  activeUnderlineColor: colors.ui.primary,
})`
  width: 100%;
  background-color: transparent;
`;
