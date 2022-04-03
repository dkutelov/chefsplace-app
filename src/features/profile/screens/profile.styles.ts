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
