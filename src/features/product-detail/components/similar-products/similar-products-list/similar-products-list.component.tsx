import { View, Text } from "react-native";
import React from "react";

interface IProps {
  category: string;
}

export const SimilarProducts = ({ category }: IProps) => {
  return (
    <View>
      <Text>Similar Products</Text>
    </View>
  );
};
