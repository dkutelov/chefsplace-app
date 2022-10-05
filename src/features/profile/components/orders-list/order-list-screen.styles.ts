import { FlatList, Platform, Pressable } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../../types/Theme";

export const Container = styled.View`
  flex: 1;
  margin-top: ${Platform.OS === "ios" ? 0 : 36}px;
`;

export const NoOrders = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const OrdersList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;

export const Title = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.headingBold};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.title};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.primary};
  margin-top: ${(props: { theme: Theme }) => props.theme.space[1]};
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
`;

// Admin Order List Item
export const ListItemWrapper = styled.Pressable`
  display: flex;
  flex-direction: row;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  background-color: white;
  padding: ${(props: { theme: Theme }) => props.theme.space[2]};
  border: 1px solid
    ${(props: { theme: Theme }) => props.theme.colors.monochromes.veryLightGray};
`;

export const ListItemContent = styled.View`
  flex-basis: 95%;
`;
export const ListItemNav = styled.View`
  flex-basis: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItemTitle = styled.Text`
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
  font-size: 16px;
`;

export const ListItemRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[1]};
`;

export const ListItemLabel = styled.Text`
  flex-basis: 40%;
  color: ${(props: { theme: Theme }) =>
    props.theme.colors.monochromes.darkGray};
`;

export const ListItemValue = styled.Text`
  color: ${(props: { theme: Theme }) => props.theme.colors.monochromes.onyx};
`;
