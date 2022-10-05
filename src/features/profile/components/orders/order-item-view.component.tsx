import { View, Text } from "react-native";
import React from "react";
import { List } from "react-native-paper";

import { ImageContainer, ProductImage } from "./order-item-view.styles";

import { CartItem } from "@types/Cart";
import { K } from "@infrastructure/constants";

const OrderItemView = ({ item }: { item: CartItem }) => {
  if (!item) return null;

  const { name, image, quantity, price } = item;

  const ItemImage = (props) => (
    <ImageContainer>
      <ProductImage
        key={name}
        {...props}
        source={{ uri: K.imageBaseUrl + image }}
        resizeMode="contain"
      />
    </ImageContainer>
  );

  const itemDetails = () =>
    `${quantity} броя x ${price / 100}лв. = ${
      (quantity * price) / 100
    }лв. без ДДС`;
  return (
    <List.Item
      title={name}
      titleNumberOfLines={2}
      titleStyle={{ fontSize: 16, lineHeight: 22, marginBottom: 4 }}
      description={itemDetails()}
      left={ItemImage}
    />
  );
};

export default OrderItemView;
