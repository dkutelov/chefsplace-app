import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { AvailabilityStatus, Product } from "../../../types/Product";
import { CartContext } from "../../../services/cart/cart.context";
import { ADD_ITEM_TO_CART } from "../../../services/cart/cart.action-types";
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
  PriceInnerWrapper,
  RoundIcon,
} from "./product-card.styles";

interface Props {
  item: Product;
}

export const ProductCard = ({ item }: Props) => {
  const {
    id,
    name,
    images,
    price,
    shortDescription,
    availabilityStatus,
    maxQuantity,
  } = item;
  const { navigate } = useNavigation();
  const { dispatch } = useContext(CartContext);

  const onProductCardPress = () => {
    navigate("ProductDetails", { id });
  };

  const addToCart = () => {
    if (maxQuantity && maxQuantity < 1) {
      return;
    }

    if (availabilityStatus !== AvailabilityStatus.OnStock) {
      return;
    }

    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        id: uuid.v4(),
        item: {
          id,
          name,
          image: images[0],
          price,
          maxQuantity,
        },
        quantity: 1,
      },
    });
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
                  <Price>{(price / 100).toFixed(2)}лв</Price>
                  <PriceDescriptior>без ДДС</PriceDescriptior>
                </PriceInnerWrapper>
                <PriceInnerWrapper>
                  <PriceWith>
                    {(Math.floor(price * 1.2) / 100).toFixed(2)}лв
                  </PriceWith>
                  <PriceDescriptior>c ДДС</PriceDescriptior>
                </PriceInnerWrapper>
              </PriceWrapper>
              <RoundIcon onPress={addToCart}>
                <Ionicons name="cart" size={28} color="white" />
              </RoundIcon>
            </CardContent>
          </ProductInfo>
        </ProductCardWrapper>
      )}
    </>
  );
};
