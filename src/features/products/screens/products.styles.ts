import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { Theme } from "../../../types/Theme";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const Search = styled.View`
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;
