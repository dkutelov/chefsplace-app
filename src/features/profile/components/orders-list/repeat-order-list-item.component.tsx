import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";

import { Order } from "@types/Order";
import { colors } from "@infrastructure/theme/colors";
import {
  OrderContainer,
  Title,
  Description,
  ProductsContainer,
  CTARow,
} from "./repeat-oder-list-item.styles";
import OrderItemView from "../orders/order-item-view.component";
import { Button } from "react-native-paper";
import { CartContext } from "@services";
import { SET_CART_ITEMS } from "@services/cart/cart.action-types";

export interface IProps {
  order: Order;
}

export const RepeatOrderListItem = ({ order }: IProps) => {
  const { navigate } = useNavigation();
  const { dispatch } = useContext(CartContext);

  const onPrepeatOrderPress = () => {
    // Load cart items
    dispatch({
      type: SET_CART_ITEMS,
      payload: { cartItems: order.items },
    });
    // Navigate to cart
    navigate("Cart", { screen: "CartScreen" });
  };

  const orderAmount = order.items.reduce(
    (prev, current) => prev + Number(current.price) * Number(current.quantity),
    0
  );
  const description = `Дата: ${new Date(order.created).toLocaleDateString(
    "bg-BG",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )}, ${new Date(order.created).toLocaleTimeString("bg-BG", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  })} ч., Общо: ${(orderAmount / 100).toFixed(2)} лв.`;

  return (
    <OrderContainer>
      <Title>Поръчка № {order.orderNumber}</Title>
      <Description>{description}</Description>
      <ProductsContainer>
        <List.Section
          style={{
            backgroundColor: colors.monochromes.veryLightGray,
            borderRadius: 8,
          }}
        >
          <List.Subheader style={{ fontSize: 20 }}>
            Поръчани Продукти
          </List.Subheader>
          {order.items.map((x) => (
            <OrderItemView key={x.productId} item={x} />
          ))}
        </List.Section>
      </ProductsContainer>
      <CTARow>
        <Button
          icon="repeat"
          mode="contained"
          color={colors.ui.primary}
          onPress={onPrepeatOrderPress}
        >
          Поръчай Отново
        </Button>
      </CTARow>
    </OrderContainer>
  );
};
