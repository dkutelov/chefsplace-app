import React, { useContext, useState, useEffect } from "react";
import { Caption, List } from "react-native-paper";
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
  Title,
} from "../../components/orders-list/order-list-screen.styles";

import { getOrdersByUser } from "@infrastructure/api/orders/get-orders-by-user";
import { getConfig } from "@infrastructure/api/config";

export const OrdersScreen = () => {
  const { profile } = useContext(AuthenticationContext);
  const [orders, setOrders] = useState<Order[]>([]);
  const config = getConfig();
  const { navigate } = useNavigation();

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
            <Caption>Нямате продукти в количката!</Caption>
          </NoOrders>
        ) : (
          <List.Section>
            <OrdersList
              data={orders}
              keyExtractor={(item, index) => item._id}
              renderItem={(item: { item: Order }) => {
                return <OrderListItem order={item.item} />;
              }}
              showsVerticalScrollIndicator={false}
            />
          </List.Section>
        )}
      </Container>
    </SafeArea>
  );
};
