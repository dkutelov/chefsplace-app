import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Theme } from "../../../types/Theme";

export const CategoryCard = styled(TouchableOpacity)`
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: ${(props: { theme: Theme }) => props.theme.space[1]};
`;

export const CategoryTitle = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.title};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  line-height: 20px;
  flex: 0.98;
`;

export const IconWrapper = styled.View`
  width: ${(props: { theme: Theme }) => props.theme.space[3]};
  margin: ${(props: { theme: Theme }) => props.theme.space[2]};
`;
