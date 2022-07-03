import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../infrastructure/theme/colors";
import { Root, ActionIcon, Quantity } from "./quantity-selector.styles";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  maxQuantity?: number;
}

export const QuantitySelector = (props: QuantitySelectorProps) => {
  const { quantity, setQuantity, maxQuantity } = props;
  const onMinusPressed = () => {
    setQuantity(Math.max(1, quantity - 1));
  };
  const onPlusPressed = () => {
    // if (maxQuantity && quantity + 1 > maxQuantity) {
    //   return;
    // }
    setQuantity(quantity + 1);
  };
  return (
    <Root>
      <ActionIcon onPress={onMinusPressed}>
        <AntDesign name="minuscircle" size={30} color={colors.ui.secondary} />
      </ActionIcon>
      <Quantity>{quantity}</Quantity>
      <ActionIcon onPress={onPlusPressed}>
        <AntDesign name="pluscircle" size={30} color={colors.ui.secondary} />
      </ActionIcon>
    </Root>
  );
};
