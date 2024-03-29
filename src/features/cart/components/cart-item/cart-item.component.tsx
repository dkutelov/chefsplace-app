import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { CartItem } from "@types/Cart";
import { colors } from "@infrastructure/theme/colors";

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
  NotEnoughQuantityNotification,
} from "./cart-item.styles";

import { QuantitySelector } from "@components/quantity-selector/quantity-selector.component";
import { CartContext } from "@services/cart/cart.context";
import {
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_QUANTITY,
} from "@services/cart/cart.action-types";
import { K } from "@infrastructure/constants";

interface Props {
  cartItem: CartItem;
}

export const CartItemCard = ({ cartItem }: Props) => {
  const { name, productId, price, image, quantity, maxQuantity } = cartItem;
  const { navigate } = useNavigation();
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { cartItems, dispatch } = useContext(CartContext);

  //TODO: Notification Max Quantity
  //TODO: Add item to cart

  useEffect(() => {
    const currentItemFromState = cartItems.find(
      (x) => x.productId === cartItem.productId
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

  useEffect(() => {
    setItemQuantity(quantity);
  }, [quantity]);

  const removeItem = () => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: { cartItemId: productId },
    });
  };

  const onCartItemPress = () => {
    navigate("ProductDetails", { id: productId });
  };

  return (
    <CartItemWrapper onPress={onCartItemPress}>
      <TopContent>
        <Title>{name}</Title>
        <DeleteIcon onPress={removeItem}>
          <Ionicons name="close" size={20} color={colors.ui.secondary} />
        </DeleteIcon>
      </TopContent>

      <Row>
        <ProductImage
          key={name}
          source={{ uri: K.imageBaseUrl + image }}
          resizeMode="contain"
        />
        <AmountWrapper>
          <Amount>Сума {((price * itemQuantity) / 100).toFixed(2)} лв.</Amount>
          <PriceWith>
            {(Math.floor(price * itemQuantity * 1.2) / 100).toFixed(2)} лв. (с
            ДДС)
          </PriceWith>
        </AmountWrapper>
      </Row>
      <Row>
        <PriceWrapper>
          <PriceInnerWrapper>
            <Price>{price / 100} лв.</Price>
            <PriceWith>{Math.floor(price * 1.2) / 100} лв. (с ДДС)</PriceWith>
          </PriceInnerWrapper>
        </PriceWrapper>

        <QuantitySelector
          quantity={itemQuantity}
          setQuantity={setItemQuantity}
          maxQuantity={cartItem.maxQuantity}
        />
        {/* {itemQuantity >= maxQuantity && (
          <NotEnoughQuantityNotification>
            Максимално количество {maxQuantity}.
          </NotEnoughQuantityNotification>
        )} */}
      </Row>
    </CartItemWrapper>
  );
};
