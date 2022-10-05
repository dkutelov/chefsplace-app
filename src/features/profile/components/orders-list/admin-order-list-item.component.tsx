import React from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";

import { Order } from "@types/Order";
import {
  ListItemWrapper,
  ListItemTitle,
  ListItemContent,
  ListItemNav,
  ListItemRow,
  ListItemLabel,
  ListItemValue,
} from "./order-list-screen.styles";
import { colors } from "@infrastructure/theme/colors";
import { orderStatusOptions, paymentOptions } from "@components/utils";
import { string } from "yup";

export interface IProps {
  order: Order;
}

export const AdminOrderListItem = ({ order }: IProps) => {
  const { navigate } = useNavigation();

  const orderAmount = order.items.reduce(
    (prev, current) => prev + Number(current.price) * Number(current.quantity),
    0
  );
  const createdAt =
    new Date(order.created).toLocaleDateString("bg-BG", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }) +
    ", " +
    new Date(order.created).toLocaleTimeString("bg-BG", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }) +
    " ч.";
  const orderDeliveryCharge = order.deliveryCharge || 0;
  const amount = `${(((orderAmount + orderDeliveryCharge) * 1.2) / 100).toFixed(
    2
  )} лв.`;
  const customer = `${order.deliveryAddressId?.firstName} ${order.deliveryAddressId?.lastName}`;
  const payment = `${paymentOptions[order.payment]}`;
  const address = `${order.deliveryAddressId?.city}`;
  const status = orderStatusOptions[order.status.toLowerCase()];
  const statusColors: { [key: string]: string } = {
    Нова: colors.ui.primary,
    Потвърдена: colors.ui.secondary,
    "Очаква плащане": colors.ui.orange,
    Отказана: colors.ui.error,
  };

  return (
    <ListItemWrapper
      onPress={() => {
        navigate("AdminOrderDetails", { order });
      }}
    >
      <ListItemContent>
        <ListItemTitle
          style={{
            color:
              order?.status === "PENDING"
                ? colors.ui.primary
                : colors.ui.secondary,
          }}
        >
          Поръчка № {order.orderNumber}
        </ListItemTitle>
        <ListItemRow>
          <ListItemLabel>Дата: </ListItemLabel>
          <ListItemValue>{createdAt}</ListItemValue>
        </ListItemRow>
        <ListItemRow>
          <ListItemLabel>Клиент: </ListItemLabel>
          <ListItemValue>{customer}</ListItemValue>
        </ListItemRow>
        <ListItemRow>
          <ListItemLabel>Град: </ListItemLabel>
          <ListItemValue>{address}</ListItemValue>
        </ListItemRow>
        <ListItemRow>
          <ListItemLabel>Сума (с ДДС): </ListItemLabel>
          <ListItemValue>{amount}</ListItemValue>
        </ListItemRow>
        <ListItemRow>
          <ListItemLabel>Плащане: </ListItemLabel>
          <ListItemValue>{payment}</ListItemValue>
        </ListItemRow>
        <ListItemRow>
          <ListItemLabel>Статус: </ListItemLabel>
          <ListItemValue
            style={{
              backgroundColor: statusColors[status] || colors.ui.secondary,
              color: "white",
              padding: 4,
            }}
          >
            {status}
          </ListItemValue>
        </ListItemRow>
      </ListItemContent>
      <ListItemNav>
        <List.Icon color={colors.ui.secondary} icon="menu-right" />
      </ListItemNav>
    </ListItemWrapper>
  );
};
