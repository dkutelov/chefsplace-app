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
import { paymentOptions } from "@components/utils";
import { white } from "react-native-paper/lib/typescript/styles/colors";

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
  const amount = `${(orderAmount / 100).toFixed(2)} лв.`;
  const customer = `${order.deliveryAddressId?.firstName} ${order.deliveryAddressId?.lastName}`;
  const payment = `${paymentOptions[order.payment]}`;
  const address = `${order.deliveryAddressId?.city}`;
  const status = `${order.status}`;
  return (
    <ListItemWrapper
      onPress={() => {
        navigate("OrderDetails", { order });
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
          <ListItemLabel>Сума: </ListItemLabel>
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
              backgroundColor:
                status === "COMPLETED" ? colors.ui.primary : colors.ui.error,
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

//  <ListItem
//    title={`Поръчка № ${order.orderNumber}\n${createdAt}`}
//    titleNumberOfLines={2}
//    description={`${customer}\n${amount}\n${payment}\n${address}\n${status}`}
//    descriptionNumberOfLines={5}
//    titleStyle={{
//      marginBottom: 4,
//      fontSize: 16,
//      color:
//        order?.status === "PENDING" ? colors.ui.primary : colors.ui.secondary,
//    }}
//    descriptionStyle={{
//      fontSize: 16,
//      color: colors.monochromes.onyx,
//      lineHeight: 22,
//    }}
//    right={(props) => {
//      props.style = { ...props.style, marginVertical: 35 };
//      return (
//        <List.Icon {...props} color={colors.ui.secondary} icon="menu-right" />
//      );
//    }}
//    onPress={() => {
//      navigate("OrderDetails", { order });
//    }}
//  />;
