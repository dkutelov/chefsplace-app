import React from "react";
import { View, Text, FlatList } from "react-native";

import { TermSection } from "@types/profile";
import { P } from "./p.component.tsx";
import styled from "styled-components/native";
import { Theme } from "@types/Theme";

const SectionContainer = styled.View`
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

const Subtitle = styled.Text`
  margin-bottom: ${(props: { theme: Theme }) => props.theme.space[2]};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
`;

export const Section = ({ data }: TermSection) => {
  return (
    <SectionContainer>
      {data.subtitle && <Subtitle>{data?.subtitle}</Subtitle>}
      <FlatList
        data={data.contents}
        renderItem={({ item }) => {
          return <P content={item} />;
        }}
        keyExtractor={(item, index: number) => `${item.slice(0, 2)} - ${index}`}
        showsVerticalScrollIndicator={false}
      />
    </SectionContainer>
  );
};
