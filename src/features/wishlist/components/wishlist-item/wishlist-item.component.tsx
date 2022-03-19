import React, { useState, useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../infrastructure/theme/colors";

import {
  CartItemWrapper,
  TopContent,
  Row,
  ProductImage,
  Title,
  PriceWrapper,
  Price,
  PriceWith,
  PriceInnerWrapper,
  DeleteIcon,
} from "./wishlist-item.styles";

import { QuantitySelector } from "../../../../components/quantity-selector/quantity-selector.component";
import { CartContext } from "../../../../services/cart/cart.context";
import {
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_QUANTITY,
} from "../../../../services/cart/cart.action-types";
import { WishlistItem } from "../../../../types/Wishlist";

interface Props {
  wishlistItem: WishlistItem;
}

export const WishlistItemCard = ({ wishlistItem }: Props) => {
  const { id, name, image, price } = wishlistItem;
  //TODO: Add Add to card - create component?
  //TODO: Disable add to cart if not available

  //   const { cartItems, isLoading, error, dispatch } = useContext(CartContext);

  //   //TODO: Notification Max Quantity
  //   //TODO: Add item to cart

  //   useEffect(() => {
  //     const currentItemFromState = cartItems.find(
  //       (x) => x.item.id === cartItem.item.id
  //     );

  //     if (currentItemFromState?.quantity === itemQuantity) {
  //       return;
  //     }
  //     dispatch({
  //       type: UPDATE_ITEM_QUANTITY,
  //       payload: {
  //         cartItem,
  //         newQuantity: itemQuantity,
  //       },
  //     });
  //   }, [itemQuantity]);

  //   const removeItem = () => {
  //     dispatch({ type: REMOVE_ITEM_FROM_CART, payload: { cartItem } });
  //   };
  return (
    <CartItemWrapper>
      <TopContent>
        <Title>{name}</Title>
        <DeleteIcon onPress={() => {}}>
          <Ionicons name="close" size={20} color={colors.ui.secondary} />
        </DeleteIcon>
      </TopContent>

      <Row>
        <ProductImage key={name} source={{ uri: image }} resizeMode="contain" />
        <PriceWrapper>
          <PriceInnerWrapper>
            <Price>{price / 100} лв.</Price>
            <PriceWith>{Math.floor(price * 1.2) / 100} лв. (с ДДС)</PriceWith>
          </PriceInnerWrapper>
        </PriceWrapper>
      </Row>
      <Row></Row>
    </CartItemWrapper>
  );
};
