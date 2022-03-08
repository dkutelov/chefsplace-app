import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Theme } from "../../../types/Theme";

export const Categories = styled(FlatList)`
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
`;
