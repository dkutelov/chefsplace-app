import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}

export const TabBarIcon = (props: IProps) => {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
};
