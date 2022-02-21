import React from "react";
import { Card } from "react-native-paper";

import { Product } from "../../../types/Product";
import {
  ProductCardWrapper,
  ProductInfo,
  CardContent,
  ProductImage,
  Title,
  Price,
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
            numberOfLines={4}
            ellipsizeMode="tail"
          >
            {shortDescription}
          </ShortDescription>
          <Price>{price / 100} лв без ДДС</Price>
        </CardContent>
      </ProductInfo>
    </ProductCardWrapper>
  );
};
