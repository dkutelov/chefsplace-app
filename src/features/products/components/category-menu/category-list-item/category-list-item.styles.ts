import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Theme } from "../../../../../types/Theme";

export const CategoryCard = styled(TouchableOpacity)`
  width: 130px;
  margin: ${(props: { theme: Theme }) => props.theme.space[1]};
  margin-left: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-right: 0;
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[2]};
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: ${(props: { theme: Theme }) => props.theme.space[1]};
`;

export const CategoryTitleContainer = styled.View`
  height: 35px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
`;

export const CategoryTitle = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.caption};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.darkGray};
  text-align: center;
`;

export const CategoryImage = styled.Image`
  margin-top: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  height: 30px;
  width: 100%;
  resize-mode: contain;
`;
