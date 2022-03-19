import React, { useContext } from "react";
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
  DeleteIcon,
} from "./wishlist-item.styles";

import { WishlistContext } from "../../../../services/wishlist/wishlist.context";

import { WishlistItem } from "../../../../types/Wishlist";
import { AddToCart } from "../../../../components/add-to-cart-icon/add-to-cart.component";
import { REMOVE_ITEM_FROM_WISHLIST } from "../../../../services/wishlist/wishlist.action-types";

interface Props {
  wishlistItem: WishlistItem;
}

export const WishlistItemCard = ({ wishlistItem }: Props) => {
  const { id, name, image, price } = wishlistItem;
  //TODO: Add Add to card - create component?
  //TODO: Disable add to cart if not available

  const { dispatch } = useContext(WishlistContext);

  const removeItem = () => {
    dispatch({ type: REMOVE_ITEM_FROM_WISHLIST, payload: { productId: id } });
  };

  return (
    <CartItemWrapper>
      <TopContent>
        <Title>{name}</Title>
        <DeleteIcon onPress={removeItem}>
          <Ionicons name="close" size={20} color={colors.ui.secondary} />
        </DeleteIcon>
      </TopContent>

      <Row>
        <ProductImage key={name} source={{ uri: image }} resizeMode="contain" />
        <PriceWrapper>
          <Price>{(price / 100).toFixed(2)} лв.</Price>
          <PriceWith>
            {(Math.floor(price * 1.2) / 100).toFixed(2)} лв. (с ДДС)
          </PriceWith>
        </PriceWrapper>
        <AddToCart
          cartItem={{ id, name, image, price, quantity: 1 }}
          size={28}
        />
      </Row>
    </CartItemWrapper>
  );
};
