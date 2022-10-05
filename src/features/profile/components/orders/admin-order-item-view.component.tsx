import React from "react";
import { List } from "react-native-paper";
import { CartItem } from "@types/Cart";
import { colors } from "@infrastructure/theme/colors";

export const AdminOrderItemView = ({ item }: { item: CartItem }) => {
  if (!item) return null;
  const { name, quantity, price } = item;

  return (
    <List.Item
      title={name}
      titleNumberOfLines={2}
      titleStyle={{
        fontSize: 18,
        lineHeight: 22,
        marginBottom: 4,
      }}
      descriptionStyle={{ fontSize: 16, color: colors.monochromes.onyx }}
      description={`${quantity} бро${quantity === 1 ? "й" : "я"} x ${
        price / 100
      }лв. = ${(quantity * price) / 100}лв. без ДДС`}
      style={{ borderBottomWidth: 1, borderBottomColor: "white" }}
    />
  );
};
