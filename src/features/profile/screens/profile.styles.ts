import styled from "styled-components/native";
import { Theme } from "@types/Theme";

export const AddressContainer = styled.ScrollView`
  flex: 1;
  padding: ${(props: { theme: Theme }) => props.theme.space[4]};
`;

export const HorizontalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileContainer = styled.View`
  flex: 1;
  margin: ${(props: { theme: Theme }) => props.theme.space[2]};
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
`;
