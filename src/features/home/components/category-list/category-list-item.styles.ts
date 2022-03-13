import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Theme } from "../../../../types/Theme";

export const CategoryCard = styled(TouchableOpacity)`
  flex-basis: 49.5%;
  height: 95px;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const CategoryTitle = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.darkGray};
  line-height: 20px;
`;
