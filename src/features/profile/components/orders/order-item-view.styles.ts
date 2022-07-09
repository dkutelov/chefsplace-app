import styled from "styled-components/native";
import { Image } from "react-native";
import { Theme } from "@types/Theme";

export const ImageContainer = styled.View`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  width: 60px;
  height: 60px;
  position: relative;
`;

export const ProductImage = styled(Image)`
  position: absolute;
  top: 10px;
  right: -5px;
  width: 40px;
  height: 40px;
`;
