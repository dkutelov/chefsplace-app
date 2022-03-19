import React, { useState, useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CartItem } from "../../../../types/Cart";
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
  AmountWrapper,
  Amount,
} from "./cart-item.styles";

import { QuantitySelector } from "../../../../components/quantity-selector/quantity-selector.component";
import { CartContext } from "../../../../services/cart/cart.context";
import {
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_QUANTITY,
} from "../../../../services/cart/cart.action-types";

interface Props {
  cartItem: CartItem;
}

export const CartItemCard = ({ cartItem }: Props) => {
  const { id, name, price, image, quantity } = cartItem;
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { cartItems, dispatch } = useContext(CartContext);

  //TODO: Notification Max Quantity
  //TODO: Add item to cart

  useEffect(() => {
    const currentItemFromState = cartItems.find((x) => x.id === cartItem.id);

    if (currentItemFromState?.quantity === itemQuantity) {
      return;
    }

    dispatch({
      type: UPDATE_ITEM_QUANTITY,
      payload: {
        cartItem,
        newQuantity: itemQuantity,
      },
    });
  }, [itemQuantity]);

  useEffect(() => {
    setItemQuantity(quantity);
  }, [quantity]);

  const removeItem = () => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: { cartItem } });
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
          <PriceInnerWrapper>
            <Price>{price / 100} лв.</Price>
            <PriceWith>{Math.floor(price * 1.2) / 100} лв. (с ДДС)</PriceWith>
          </PriceInnerWrapper>
        </PriceWrapper>
      </Row>
      <Row>
        <QuantitySelector
          quantity={itemQuantity}
          setQuantity={setItemQuantity}
          maxQuantity={cartItem.maxQuantity}
        />
        <AmountWrapper>
          <Amount>Сума {((price * itemQuantity) / 100).toFixed(2)} лв.</Amount>
          <PriceWith>
            {(Math.floor(price * itemQuantity * 1.2) / 100).toFixed(2)} лв. (с
            ДДС)
          </PriceWith>
        </AmountWrapper>
      </Row>
    </CartItemWrapper>
  );
};
