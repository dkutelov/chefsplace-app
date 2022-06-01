import styled from "styled-components/native";

import { Theme } from "@types/Theme";

export const NoAddressMessage = styled.Text`
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.primary};
  text-align: center;
  padding: ${(props: { theme: Theme }) => props.theme.space[4]} 0
    ${(props: { theme: Theme }) => props.theme.space[3]};
`;
