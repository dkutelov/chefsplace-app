import React from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";

import { Order } from "@types/Order";
import { ListItem } from "@components/menu-item/menu-item.styles";
import { colors } from "@infrastructure/theme/colors";

export interface IProps {
  order: Order;
}

export const OrderListItem = ({ order, onOrderPress }: IProps) => {
  const { navigate, goBack } = useNavigation();

  const orderAmount = order.items.reduce(
    (prev, current) => prev + Number(current.price) * Number(current.quantity),
    0
  );
  const description = `Направена на ${new Date(
    order.created
  ).toLocaleDateString("bg-BG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}, ${new Date(order.created).toLocaleTimeString("bg-BG", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  })} ч.
Общо: ${(orderAmount / 100).toFixed(2)} лв.`;
  return (
    <ListItem
      title={`Поръчка № ${order.orderNumber}`}
      description={description}
      titleStyle={{ marginBottom: 8, fontSize: 20, color: colors.ui.primary }}
      descriptionStyle={{
        fontSize: 16,
        color: colors.monochromes.onyx,
        lineHeight: 22,
      }}
      right={(props) => {
        props.style = { ...props.style, marginVertical: 35 };
        return (
          <List.Icon {...props} color={colors.ui.secondary} icon="menu-right" />
        );
      }}
      onPress={() => {
        navigate("OrderDetails", { order });
      }}
    />
  );
};

export default OrderListItem;
