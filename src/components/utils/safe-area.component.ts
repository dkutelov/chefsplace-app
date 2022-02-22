import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

import { Theme } from "../../types/Theme";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
`;

// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
