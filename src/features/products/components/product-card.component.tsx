import React from "react";
import { Text } from "react-native";
import { Product } from "../../../types/Product";
import {
  ProductCardWrapper,
  ProductInfo,
  CardContent,
  ProductImage,
  Title,
  PriceWrapper,
  Price,
  PriceDescriptior,
  ShortDescription,
} from "./product-card.styles";

interface Props {
  product: Product;
}

export const ProductCard = ({ item }: any) => {
  const {
    id,
    name,
    images,
    price,
    reducedPrice,
    shortDescription,
    availabilityStatus,
  } = item;
  return (
    <ProductCardWrapper elevation={3}>
      <Title>{name}</Title>
      <ProductInfo>
        <ProductImage
          key={name}
          source={{ uri: images[0] }}
          resizeMode="contain"
        />
        <CardContent>
          <ShortDescription
            variant="caption"
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {shortDescription}
          </ShortDescription>
          <PriceWrapper>
            <Price>{price / 100}лв</Price>
            <PriceDescriptior>без ДДС</PriceDescriptior>
          </PriceWrapper>
        </CardContent>
      </ProductInfo>
    </ProductCardWrapper>
  );
};
