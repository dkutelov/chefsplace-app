import styled from "styled-components/native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { Theme } from "../../../types/Theme";

export const ProductScrollView = styled(ScrollView)`
  flex: 1;
  padding-top: ${(props: { theme: Theme }) => props.theme.space[4]};
`;

export const Title = styled(Text)`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.headingBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.title};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
  text-align: center;
  line-height: 20px;
  letter-spacing: -1px;
`;
