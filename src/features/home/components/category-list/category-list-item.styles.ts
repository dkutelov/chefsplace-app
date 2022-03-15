import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Theme } from "../../../../types/Theme";

export const CategoryCard = styled(TouchableOpacity)`
  flex-basis: 49.5%;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[2]};
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const CategoryTitleContainer = styled.View`
  height: 45px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const CategoryTitle = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.darkGray};
  text-align: center;
`;

export const CategoryImage = styled.Image`
  margin-top: ${(props: { theme: Theme }) => props.theme.space[3]};
  height: 50px;
  width: 100%;
  resize-mode: contain;
`;
