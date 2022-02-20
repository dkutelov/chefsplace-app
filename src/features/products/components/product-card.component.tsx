import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { Product } from "../../../types/Product";
import { Theme } from "../../../types/Theme";

const ProductCardWrapper = styled(Card)`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
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
