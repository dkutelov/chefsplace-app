import styled from "styled-components/native";
import { Theme } from "../../types/Theme";

export const ListItem = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  border-bottom-width: 1px;
  border-bottom-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.gray};
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-left: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const Title = styled.Text`
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
`;
