import { View } from "react-native";
import React from "react";
import { List } from "react-native-paper";

import { Order } from "@types/Order";
import { colors } from "@infrastructure/theme/colors";

import OrderItemView from "./order-item-view.component";
import { Spacer, Text } from "@components";
import { paymentOptions, orderStatusOptions } from "@components/utils";
import { Row } from "./order-view.styles";

export const OrderView = ({ order }: { order: Order }) => {
  const orderAmount = order.items.reduce(
    (prev, current) => prev + Number(current.price) * Number(current.quantity),
    0
  );

  return (
    <View>
      <Spacer position="bottom" size="medium">
        <Text variant="title" style={{ color: colors.ui.primary }}>
          Поръчка № {order.orderNumber}
        </Text>
      </Spacer>
      <Spacer position="bottom" size="xl">
        <Text variant="caption">
          Регистрирана на{" "}
          {new Date(order.created).toLocaleDateString("bg-BG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          ,{" "}
          {new Date(order.created).toLocaleTimeString("bg-BG", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          ч.
        </Text>
      </Spacer>
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
      <Spacer position="top" size="medium">
        <Row>
          <Text variant="body">Общо</Text>
          <Text variant="body">
            {(orderAmount / 100).toFixed(2)}лв. без ДДС
          </Text>
        </Row>
      </Spacer>
      <Spacer position="top" size="xl">
        <Row>
          <Text variant="body">Начин на плащане</Text>
          <Text variant="body">{paymentOptions[order.payment]}</Text>
        </Row>
      </Spacer>
      <Spacer position="top" size="medium">
        <Row>
          <Text variant="body">Статус</Text>
          <Text variant="body">
            {orderStatusOptions[order.status.toLowerCase()]}
          </Text>
        </Row>
      </Spacer>
    </View>
  );
};

export default OrderView;
