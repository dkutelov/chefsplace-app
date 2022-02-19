import { View, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

const ProductCardWrapper = styled(Card)`
  background-color: red;
`;

export const ProductCard = () => {
  return (
    <ProductCardWrapper elevation={5}>
      <Card.Title title="Card Title" />
    </ProductCardWrapper>
  );
};
