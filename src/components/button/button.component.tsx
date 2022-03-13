import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../infrastructure/theme";

interface IProps {
  text: string;
  onButtonPress: () => void;
  containerStyles?: {
    [key: string]: any;
  };
}

export const Button = ({ text, onButtonPress, containerStyles }: IProps) => {
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={[styles.root, containerStyles]}
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
    fontWeight: "bold",
    color: "#ffffff",
  },
});