import styled from "styled-components/native";
import { Theme } from "@types/Theme";

export const ContentContainer = styled.View`
  background-color: rgba(255, 255, 255, 1);
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  margin: ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const Separator = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
