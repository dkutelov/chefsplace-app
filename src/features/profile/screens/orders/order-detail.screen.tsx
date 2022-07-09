import React from "react";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

import { SafeArea } from "@components/utils/safe-area.component";
import OrderView from "@features/profile/components/orders/order-view.component";
import { Theme } from "@types/Theme";
import { Order } from "@types/Order";

export const OrderContainer = styled.ScrollView`
  flex: 1;
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.primary};
`;

export const OrderDetailScreen = () => {
  const { params } = useRoute<Readonly<{ params: { order: Order } }>>();

  if (!params) return null;

  const { order } = params;

  if (!order) return null;

  return (
    <>
      <SafeArea>
        <OrderContainer>
          <OrderView order={order} />
        </OrderContainer>
      </SafeArea>
    </>
  );
};
