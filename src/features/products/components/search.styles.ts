import styled from "styled-components/native";

import { Theme } from "../../../types/Theme";

export const HeaderContainer = styled.View`
  margin: ${(props: { theme: Theme }) => props.theme.space[2]}
    ${(props: { theme: Theme }) => props.theme.space[3]};
`;
