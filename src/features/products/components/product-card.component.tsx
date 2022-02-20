import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Product } from "../../../types/Product";
import { Theme } from "../../../types/Theme";

const ProductCardWrapper = styled(Card)`
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.heading};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  color: ${(props: { theme: Theme }) => props.theme.colors.ui.primary};
  text-align: center;
`;

const ProductImage = styled(Card.Cover)`
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
  flex-basis: 50%;
`;

const Price = styled.Text`
  font-family: ${(props: { theme: Theme }) => props.theme.fonts.body};
  font-size: ${(props: { theme: Theme }) => props.theme.fontSizes.body};
  color: ${(props: { theme: Theme }) => props.theme.colors.text.primary};
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
    <ProductCardWrapper elevation={3}>
      <ProductImage
        key={name}
        source={{ uri: images[0] }}
        resizeMode="contain"
      />
      <Card.Content>
        <Title>{name}</Title>
        <Price>{price / 100} лв без ДДС</Price>
      </Card.Content>
    </ProductCardWrapper>
  );
};
