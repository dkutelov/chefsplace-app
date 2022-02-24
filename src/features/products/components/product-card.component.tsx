import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AvailabilityStatus, Product } from "../../../types/Product";
import {
  ProductCardWrapper,
  ProductInfo,
  CardContent,
  ProductImage,
  Title,
  PriceWrapper,
  Price,
  PriceWith,
  PriceDescriptior,
  ShortDescription,
  Available,
  BottomContent,
  OOS,
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
      <ProductInfo>
        <ProductImage
          key={name}
          source={{ uri: images[0] }}
          resizeMode="contain"
        />
        <CardContent>
          <Title>{name}</Title>
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
          <PriceWrapper>
            <PriceWith>{Math.floor(price * 1.2) / 100}лв</PriceWith>
            <PriceDescriptior>c ДДС</PriceDescriptior>
          </PriceWrapper>
          <BottomContent>
            {availabilityStatus === AvailabilityStatus.OnStock ? (
              <Available>Наличен</Available>
            ) : (
              <OOS>Ичерпан</OOS>
            )}
            <Ionicons name="cart" size={24} color="black" />
          </BottomContent>
        </CardContent>
      </ProductInfo>
    </ProductCardWrapper>
  );
};
