import { View, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

import { Title, ItemContainer, ProductImage } from "./order-item-view.styles";

import { CartItem } from "@types/Cart";
import { K } from "@infrastructure/constants";

const OrderItemView = ({ item }: { item: CartItem }) => {
  if (!item) return null;

  const { name, image, quantity, price } = item;

  const ItemImage = (props) => (
    <ProductImage
      key={name}
      {...props}
      source={{ uri: K.imageBaseUrl + image }}
      resizeMode="contain"
    />
  );

  const itemDetails = () =>
    `${quantity} броя x ${price / 100}лв. = ${
      (quantity * price) / 100
    }лв. без ДДС`;
  return (
    <Card style={{ marginBottom: 8 }} elevation={1}>
      <Card.Title
        title={name}
        titleNumberOfLines={2}
        titleStyle={{ fontSize: 16, lineHeight: 22, marginBottom: 4 }}
        subtitle={itemDetails()}
        left={ItemImage}
      />
    </Card>
  );
};

export default OrderItemView;
