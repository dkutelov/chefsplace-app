import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../../../../types/Theme";

export const Container = styled.View`
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-top: ${(props: { theme: Theme }) => props.theme.space[1]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const Title = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.headingBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.title};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const SimilarProductsContainer = styled(ScrollView)``;
