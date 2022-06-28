import styled from "styled-components/native";
import { Theme } from "../../../types/Theme";

export const HeroBanner = styled.View`
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const SecondaryBanner = styled.View`
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  width: 100%;
  margin-top: -${(props: { theme: Theme }) => props.theme.space[2]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
`;

export const HeroBannerImage = styled.Image`
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  width: 100%;
`;

export const SecondaryBannerImage = styled.Image`
  border-radius: ${(props: { theme: Theme }) => props.theme.space[1]};
  width: 100%;
`;

export const Categories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CategoriesSpinnerContainer = styled.View`
  height: 300px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
