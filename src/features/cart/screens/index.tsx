import { View, Text } from "react-native";
import React from "react";
import { SafeArea } from "../../../components/utils/safe-area.component";

export const CartScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>Your cart is empty! </Text>
      </View>
    </SafeArea>
  );
};
