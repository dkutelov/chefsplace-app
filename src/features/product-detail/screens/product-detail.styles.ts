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

export const ShortDescription = styled(Text)`
  margin: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 ${(props: { theme: Theme }) => props.theme.space[3]}
    ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const ActionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const Description = styled(Text)`
  margin: ${(props: { theme: Theme }) => props.theme.space[1]} 0;
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const PriceInnerWrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const Price = styled(Text)`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.bodyBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.title};
`;

export const PriceDescriptior = styled.Text`
  margin-left: ${(props: { theme: Theme }) => props.theme.space[2]};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.caption};
`;

export const RoundIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: 28px;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.ui.primary};
`;
