import React, { useState, useContext, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { AvailabilityStatus, Product } from "../../../../../types/Product";
import { CartContext } from "../../../../../services/cart/cart.context";
import { WishlistContext } from "../../../../../services/wishlist/wishlist.context";
import {
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
} from "../../../../../services/wishlist/wishlist.action-types";
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
  CTARow,
  PriceInnerWrapper,
} from "./product-card.styles";
import { WishlistIcon } from "../../../../../components/wishlist-icon/wishlist-icon.component";
import { AddToCart } from "../../../../../components/add-to-cart-icon/add-to-cart.component";

interface Props {
  item: Product;
}

export const ProductCard = ({ item }: Props) => {
  const { id, name, images, price, availabilityStatus, maxQuantity } = item;
  const { navigate } = useNavigation();
  const { dispatch: contextDispatch } = useContext(CartContext);
  const { wishlistItems, dispatch: wishlistDispatch } =
    useContext(WishlistContext);

  const getWishlistedStatus = (): boolean => {
    if (wishlistItems.length) {
      const isInWishlist = wishlistItems.find((x) => x.id === id);
      if (isInWishlist) {
        return true;
      }
    }
    return false;
  };

  const [isWishlisted, setIsWishlisted] =
    useState<boolean>(getWishlistedStatus);

  useFocusEffect(
    useCallback(() => {
      setIsWishlisted(getWishlistedStatus);
    }, [wishlistItems])
  );

  const onProductCardPress = () => {
    navigate("ProductDetails", { id });
  };

  const toggleWishlisted = () => {
    if (isWishlisted) {
      setIsWishlisted(false);
      wishlistDispatch({
        type: REMOVE_ITEM_FROM_WISHLIST,
        payload: {
          productId: id,
        },
      });
      setIsWishlisted(false);
    } else {
      const wishlistItem = { id, name, image: images[0], price };
      wishlistDispatch({
        type: ADD_ITEM_TO_WISHLIST,
        payload: {
          wishlistItem,
        },
      });
      setIsWishlisted(true);
    }
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
              <PriceWrapper>
                <PriceInnerWrapper>
                  <Price>{(price / 100).toFixed(2)} лв.</Price>
                  <PriceDescriptior>без ДДС</PriceDescriptior>
                </PriceInnerWrapper>
                <PriceInnerWrapper>
                  <PriceWith>
                    {(Math.floor(price * 1.2) / 100).toFixed(2)} лв.
                  </PriceWith>
                  <PriceDescriptior>c ДДС</PriceDescriptior>
                </PriceInnerWrapper>
              </PriceWrapper>
            </CardContent>
          </ProductInfo>
          <CTARow>
            <WishlistIcon
              isWishlisted={isWishlisted}
              toggleWishlisted={toggleWishlisted}
            />
            <AddToCart
              cartItem={{
                id,
                name,
                image: images[0],
                price,
                maxQuantity,
                quantity: 1,
              }}
              size={28}
            />
          </CTARow>
        </ProductCardWrapper>
      )}
    </>
  );
};
