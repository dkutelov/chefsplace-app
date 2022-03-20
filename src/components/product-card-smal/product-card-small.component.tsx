import React, { useState, useContext, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { AvailabilityStatus, Product } from "../../types/Product";
import { CartContext } from "../../services/cart/cart.context";

import {
  ProductCardWrapper,
  CardContent,
  ProductImage,
  Title,
  Price,
} from "./product-card-small.styles";

import { AddToCart } from "../../components/add-to-cart-icon/add-to-cart.component";

interface Props {
  item: Product;
}

export const ProductCardSmall = ({ item }: Props) => {
  const { id, name, images, price, maxQuantity } = item;
  const { navigate } = useNavigation();

  const onProductCardPress = () => {
    navigate("ProductDetails", { id });
  };

  return (
    <ProductCardWrapper onPress={onProductCardPress}>
      <ProductImage
        key={name}
        source={{ uri: images[0] }}
        resizeMode="contain"
      />
      <Title numberOfLines={2}>{name}</Title>
      <CardContent>
        <Price>{(price / 100).toFixed(2)} лв.</Price>
        <AddToCart
          disabled={false}
          cartItem={{
            id,
            name,
            image: images[0],
            price,
            maxQuantity,
            quantity: 1,
          }}
          size={20}
        />
      </CardContent>
    </ProductCardWrapper>
  );
};
