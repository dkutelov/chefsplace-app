import { View, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { Product } from "../../../interfaces/product";

const ProductCardWrapper = styled(Card)`
  background-color: red;
`;

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const {
    name,
    images,
    price,
    reducedPrice,
    shortDescription,
    availabilityStatus,
  } = product;
  return (
    <ProductCardWrapper elevation={5}>
      <Card.Title title={product.name} />
    </ProductCardWrapper>
  );
};
