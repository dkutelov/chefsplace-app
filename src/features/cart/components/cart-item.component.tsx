import React, { useState, useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CartItem } from "../../../types/Cart";
import { colors } from "../../../infrastructure/theme/colors";

import {
  CartItemWrapper,
  TopContent,
  CardContent,
  Row,
  ProductImage,
  Title,
  Label,
  PriceWrapper,
  Price,
  PriceWith,
  PriceInnerWrapper,
  DeleteIcon,
  AmountWrapper,
  Amount,
} from "./cart-item.styles";

import { QuantitySelector } from "../../../components/quantity-selector/quantity-selector.component";
import { CartContext } from "../../../services/cart/cart.context";
import {
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_QUANTITY,
} from "../../../services/cart/cart.action-types";

interface Props {
  cartItem: CartItem;
}

export const CartItemCard = ({ cartItem }: Props) => {
  const { id, item, quantity } = cartItem;

  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { cartItems, isLoading, error, dispatch } = useContext(CartContext);

  //TODO: Notification Max Quantity
  //TODO: Add item to cart

  useEffect(() => {
    const currentItemFromState = cartItems.find(
      (x) => x.item.id === cartItem.item.id
    );

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

  const removeItem = () => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: { cartItem } });
  };
  return (
    <CartItemWrapper>
      <TopContent>
        <Title>{item.name}</Title>
        <DeleteIcon onPress={removeItem}>
          <Ionicons name="close" size={20} color={colors.ui.secondary} />
        </DeleteIcon>
      </TopContent>

      <Row>
        <ProductImage
          key={item.name}
          source={{ uri: item.image }}
          resizeMode="contain"
        />
        <PriceWrapper>
          <PriceInnerWrapper>
            <Price>{item.price / 100} лв</Price>
            <PriceWith>
              {Math.floor(item.price * 1.2) / 100}лв (с ДДС)
            </PriceWith>
          </PriceInnerWrapper>
        </PriceWrapper>
      </Row>
      <Row>
        <QuantitySelector
          quantity={itemQuantity}
          setQuantity={setItemQuantity}
          maxQuantity={cartItem.item.maxQuantity}
        />
        <AmountWrapper>
          <Amount>
            Сума {((item.price * itemQuantity) / 100).toFixed(2)} лв
          </Amount>
          <PriceWith>
            {(Math.floor(item.price * itemQuantity * 1.2) / 100).toFixed(2)}лв
            (с ДДС)
          </PriceWith>
        </AmountWrapper>
      </Row>
    </CartItemWrapper>
  );
};
