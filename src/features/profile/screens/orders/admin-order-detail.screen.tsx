import React from "react";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

import { SafeArea } from "@components/utils/safe-area.component";
import { AdminOrderView } from "@features/profile/components/orders/admin-order-view.component";
import { Theme } from "@types/Theme";

export const OrderContainer = styled.ScrollView`
  flex: 1;
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
`;

export const AdminOrderDetailScreen = () => {
  const { params } = useRoute();

  if (!params) return null;

  const { order } = params;

  if (!order) return null;

  return (
    <>
      <SafeArea>
        <OrderContainer>
          <AdminOrderView order={order} />
        </OrderContainer>
      </SafeArea>
    </>
  );
};
