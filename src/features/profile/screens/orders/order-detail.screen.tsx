import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export const OrderDetailScreen = () => {
  const { params } = useRoute();
  return (
    <View>
      <Text>OrderDetailScreen</Text>
      <Text>{params.order._id}</Text>
    </View>
  );
};
