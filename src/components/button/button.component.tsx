import { colors } from "@infrastructure/theme/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../infrastructure/theme";

interface IProps {
  text: string;
  disabled?: boolean;
  onButtonPress: () => void;
  containerStyles?: {
    [key: string]: any;
  };
}

export const Button = ({
  text,
  disabled,
  onButtonPress,
  containerStyles,
}: IProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onButtonPress}
      style={[
        styles.root,
        { backgroundColor: disabled ? colors.ui.secondary : colors.ui.primary },
        containerStyles,
      ]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.ui.primary,
    marginVertical: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "normal",
    color: "#ffffff",
  },
});
