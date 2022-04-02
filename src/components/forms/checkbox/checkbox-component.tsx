import React from "react";

import { Ionicons } from "@expo/vector-icons";
import {
  CheckBoxContainer,
  CheckBoxIconContainer,
  Label,
} from "./checkbox-styles";

const Checkbox = ({
  checked,
  label,
  onCheckboxPress,
}: {
  checked: boolean;
  label: string;
  onCheckboxPress: () => void;
}) => {
  return (
    <CheckBoxContainer onPress={onCheckboxPress}>
      <CheckBoxIconContainer>
        {checked ? (
          <Ionicons name="ios-checkbox-outline" size={24} color="black" />
        ) : (
          <Ionicons name="ios-square-outline" size={24} color="black" />
        )}
      </CheckBoxIconContainer>
      <Label>{label}</Label>
    </CheckBoxContainer>
  );
};

export default Checkbox;
