import React, { useContext } from "react";
import { List } from "react-native-paper";

// Types
import { Order } from "@types/Order";

// Context
import { AuthenticationContext } from "@services";

// Components
import { SafeArea } from "@components/utils/safe-area.component";
import { AdminOrderListItem } from "../../components/orders-list/admin-order-list-item.component";

// Styles
import {
  OrdersList,
  Container,
} from "../../components/orders-list/order-list-screen.styles";

export const AllOrdersScreen = () => {
  const { profile } = useContext(AuthenticationContext);

  if (
    !profile ||
    profile?.allOrders === undefined ||
    profile?.allOrders === null
  )
    return null;

  return (
    <SafeArea>
      <Container>
        {profile.allOrders.length > 0 && (
          <List.Section>
            <OrdersList
              data={profile?.allOrders}
              keyExtractor={(item, index) => item._id}
              renderItem={(item: { item: Order }) => {
                return <AdminOrderListItem order={item.item} />;
              }}
              showsVerticalScrollIndicator={false}
            />
          </List.Section>
        )}
      </Container>
    </SafeArea>
  );
};
