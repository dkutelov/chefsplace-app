import styled from "styled-components/native";
import { FlatList } from "react-native";

import { Theme } from "../../../../types/Theme";

export const ContainerView = styled.View`
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[0]};
`;

export const ImageFlatList = styled(FlatList)`
  background-color: #ffffff;
  margin: ${(props: { theme: Theme }) => props.theme.space[2]};
  border-radius: ${(props: { theme: Theme }) => props.theme.space[2]};
  padding-bottom: ${({
    theme,
    oneImageOnly,
  }: {
    theme: Theme;
    oneImageOnly: boolean;
  }) => (oneImageOnly ? 0 : theme.space[3])};
`;

export const DotsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

export const DotsInnerContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
