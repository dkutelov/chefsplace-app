import styled from "styled-components/native";
import { Pressable } from "react-native";
import { Theme } from "../../../../../types/Theme";

export const CategoryCard = styled(Pressable)`
  width: 100px;
  margin: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[2]};
  justify-content: space-between;
  align-items: center;
`;

export const CategoryTitleContainer = styled.View`
  height: 55px;
  width: 95px;
  justify-content: flex-start;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.button};
  color: ${(props: { theme: Theme }) => props.theme.colors.monochromes.onyx};
  text-align: center;
`;

export const CategoryImageContainer = styled.View`
  background-color: white;
  height: 80px;
  width: 95px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  border-width: ${(props: { borderColor: string }) =>
    props.borderColor === "#4b9301" ? "3px" : "1px"};
  border-color: ${(props: { borderColor: string }) => props.borderColor};
`;

export const CategoryImage = styled.Image`
  height: 70px;
  width: 100%;
  resize-mode: contain;
`;
