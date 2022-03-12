import styled from "styled-components/native";
import { Theme } from "../../../../types/Theme";

export const AccordionContainer = styled.View`
  margin: 0 ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const DescriptionContent = styled.Text`
  line-height: 20px;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.tertiary};
  padding-right: ${(props: { theme: Theme }) => props.theme.space[2]};
`;
