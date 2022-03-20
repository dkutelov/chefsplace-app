import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { Theme } from "../../types/Theme";

export const ProductCardWrapper = styled(TouchableOpacity)`
  width: 49%;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  flex-direction: column;
`;

export const CardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  text-transform: capitalize;
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  margin-top: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
  text-align: center;
  line-height: 16px;
`;

export const ProductImage = styled.Image`
  height: 113px;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const Price = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.bodyBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
`;
