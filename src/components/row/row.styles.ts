import styled from "styled-components/native";
import { Theme } from "../../types/Theme";

export const RowWrapper = styled.View`
  margin: 0 ${(props: { theme: Theme }) => props.theme.space[2]}
    ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const Title = styled.Text`
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.h5};
`;
