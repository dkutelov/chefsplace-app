import React from "react";
import { View, Text } from "react-native";

import styled from "styled-components/native";
import { Theme } from "@types/Theme";

const Content = styled.Text`
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.button};
  color: ${(props: { theme: Theme }) => props.theme.colors.monochromes.onyx};
`;

export const P = ({ content }: { content: string }) => {
  return (
    <View>
      <Content>{content}</Content>
    </View>
  );
};
