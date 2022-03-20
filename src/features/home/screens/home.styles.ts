import styled from "styled-components/native";
import { Theme } from "../../../types/Theme";

export const HeroBanner = styled.View`
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  width: 100%;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const HeroBannerImage = styled.Image`
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  width: 100%;
  height: 300px;
  resize-mode: cover;
`;

export const Categories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
