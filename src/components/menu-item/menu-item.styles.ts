import styled from "styled-components/native";
import { List } from "react-native-paper";
import { Theme } from "../../types/Theme";

export const ListItem = styled(List.Item)`
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  border-bottom-width: 1px;
  border-bottom-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.gray};
`;
