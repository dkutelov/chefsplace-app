import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { Theme } from "@types/Theme";

export const OrderContainer = styled.View`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const Title = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.title};
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  margin-top: ${(props: { theme: Theme }) => props.theme.space[3]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
  text-align: center;
  line-height: 20px;
  letter-spacing: -1px;
`;

export const Description = styled.Text`
  padding: 0 ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const ProductsContainer = styled.View`
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const CTARow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props: { theme: Theme }) => props.theme.space[1]} 0
    ${(props: { theme: Theme }) => props.theme.space[4]};
`;
