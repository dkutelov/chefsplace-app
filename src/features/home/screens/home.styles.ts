import styled from "styled-components/native";
import { Image } from "react-native";
import { Theme } from "../../../types/Theme";

export const HeroBanner = styled.View`
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  width: 100%;
`;

export const HeroBannerImage = styled.Image`
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  width: 100%;
  height: 350px;
`;
