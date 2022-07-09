import { View } from "react-native";
import React from "react";
import { Order } from "@types/Order";
import OrderItemView from "./order-item-view.component";
import { Text } from "@components/typography/text.component";
import { Spacer } from "@components/spacer/spacer.component";
import { colors } from "@infrastructure/theme/colors";
import { Row } from "./order-view.styles";
import { Button } from "@components/button/button.component";
import { useNavigation } from "@react-navigation/native";
import { CentertedLoadingContainer } from "@components/loading/loading.styles";

export const OrderView = ({ order }: { order: Order }) => {
  const { goBack } = useNavigation();
  const orderAmount = order.items.reduce(
    (prev, current) => prev + Number(current.price) * Number(current.quantity),
    0
  );

  const paymentOptions = {
    "0": "Паричен превод",
    "1": "Банков път",
    "2": "Кредитна/дебитна карта",
    "3": "В брой на доставчика",
  };
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
      <Spacer position="bottom" size="medium">
        <Text
          variant="body"
          style={{ color: colors.monochromes.onyx, textTransform: "uppercase" }}
        >
          Поръчани продукти
        </Text>
      </Spacer>
      <View>
        {order.items.map((x) => (
          <OrderItemView key={x.productId} item={x} />
        ))}
      </View>
      <Spacer position="top" size="medium">
        <Row>
          <Text variant="body">Общо</Text>
          <Text variant="body">
            {(orderAmount / 100).toFixed(2)}лв. без ДДС
          </Text>
        </Row>
      </Spacer>
      <Spacer position="top" size="medium">
        <Row>
          <Text variant="body">Начин на плащане</Text>
          <Text variant="body">{paymentOptions[order.payment]}</Text>
        </Row>
      </Spacer>
      <Spacer position="top" size="medium">
        <Row>
          <Text variant="body">Статус</Text>
          <Text variant="body">{order.status}</Text>
        </Row>
      </Spacer>
      <Spacer
        position="top"
        size="xxl"
        containerStyles={{
          flex: 1,
        }}
      >
        <Button
          text="OK"
          containerStyles={{
            width: "35%",
            alignSelf: "center",
          }}
          onButtonPress={() => {
            goBack();
          }}
        />
      </Spacer>
    </View>
  );
};

export default OrderView;
