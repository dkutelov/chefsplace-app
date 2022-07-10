import React, { useContext, useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { Caption } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

// Types
import { Order } from "@types/Order";

// Context
import { AuthenticationContext } from "@services";

// Components
import { SafeArea } from "@components/utils/safe-area.component";
import { OrderListItem } from "../../components/orders-list/order-list-item.component";

// Styles
import {
  OrdersList,
  NoOrders,
  Container,
} from "../../components/orders-list/order-list-screen.styles";

import { getOrdersByUser } from "@infrastructure/api/orders/get-orders-by-user";
import { getConfig } from "@infrastructure/api/config";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { RepeatOrderListItem } from "@features/profile/components/orders-list/repeat-order-list-item.component";
import { Theme } from "@types/Theme";

export const OrderFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`
  flex: 1;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;

export const OrderAgainScreen = () => {
  const { profile } = useContext(AuthenticationContext);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const config = getConfig();
  const { navigate } = useNavigation();
  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    if (!profile) return;
    (async () => {
      const userOrders = await getOrdersByUser(config, profile._id || "");
      setOrders(userOrders);
    })();
  }, [profile]);

  return (
    <SafeArea>
      <Container>
        {orders.length === 0 ? (
          <NoOrders>
            <Caption>Все още нямате направени поръчки</Caption>
          </NoOrders>
        ) : (
          <OrderFlatList
            data={orders}
            renderItem={(item: { item: Order }) => {
              return <RepeatOrderListItem order={item.item} />;
            }}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Container>
    </SafeArea>
  );
};
