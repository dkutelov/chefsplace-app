import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AvailabilityStatus, Product } from "../../../types/Product";

import {
  ProductCardWrapper,
  ProductInfo,
  ProductImageWrapper,
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

export const ProductCard = ({ item, navigation }: any) => {
  const {
    id,
    name,
    images,
    price,
    reducedPrice,
    shortDescription,
    availabilityStatus,
  } = item;

  const onProductCardPress = () => {
    navigation.navigate("ProductDetails", { id });
  };

  return (
    <>
      {availabilityStatus === AvailabilityStatus.OnStock && (
        <ProductCardWrapper onPress={onProductCardPress}>
          <Title>{name}</Title>
          <ProductInfo>
            <ProductImageWrapper>
              <ProductImage
                key={name}
                source={{ uri: images[0] }}
                resizeMode="contain"
              />
            </ProductImageWrapper>
            <CardContent>
              <ShortDescription
                variant="caption"
                numberOfLines={3}
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
      )}
    </>
  );
};
