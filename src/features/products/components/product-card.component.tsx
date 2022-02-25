import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AvailabilityStatus, Product } from "../../../types/Product";
import {
  ProductCardWrapper,
  ProductInfo,
  ProductInfoLeft,
  CardContent,
  ProductImage,
  Title,
  PriceWrapper,
  Price,
  PriceWith,
  PriceDescriptior,
  ShortDescription,
  ChipContent,
  PriceInnerWrapper,
  RoundIcon,
  Chip,
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
    <ProductCardWrapper>
      <Title>{name}</Title>
      <ProductInfo>
        <ProductInfoLeft>
          <ProductImage
            key={name}
            source={{ uri: images[0] }}
            resizeMode="contain"
          />
          {availabilityStatus === AvailabilityStatus.OnStock ? (
            <Chip color="#9c9c9c">
              <ChipContent>Наличен</ChipContent>
            </Chip>
          ) : (
            <Chip color="#ff1919">
              <ChipContent>Ичерпан</ChipContent>
            </Chip>
          )}
        </ProductInfoLeft>
        <CardContent>
          <ShortDescription
            variant="caption"
            numberOfLines={5}
            ellipsizeMode="tail"
          >
            {shortDescription}
          </ShortDescription>
          <PriceWrapper>
            <PriceInnerWrapper>
              <Price>{price / 100}лв</Price>
              <PriceDescriptior>без ДДС</PriceDescriptior>
            </PriceInnerWrapper>
            <PriceInnerWrapper>
              <PriceWith>{Math.floor(price * 1.2) / 100}лв</PriceWith>
              <PriceDescriptior>c ДДС</PriceDescriptior>
            </PriceInnerWrapper>
          </PriceWrapper>
          <RoundIcon>
            <Ionicons name="cart" size={28} color="white" />
          </RoundIcon>
        </CardContent>
      </ProductInfo>
    </ProductCardWrapper>
  );
};
