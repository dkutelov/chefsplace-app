import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Order } from "@types/Order";

export const OrderDetailScreen = () => {
  const { params } = useRoute<Readonly<{ params: { order: Order } }>>();

  if (!params) return null;

  const { order } = params;

  if (!order) return null;

  return (
    <View>
      <Text>Поръчка № {params.order.orderNumber}</Text>
      <Text>Регистрирана на</Text>
      <Text>Общо</Text>
      <Text>Продукти - снимка - цена - количество - общо</Text>
      <Text>Статус</Text>
      <Text>Обратно</Text>
      <Text>Поръчай Отново -> зареди продукти в количка, адрес на доставка, данни за фактура и начин на плащане - контекст</Text>
    </View>
  );
};
