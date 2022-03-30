import React from "react";
import { Badge } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  isVisible: boolean;
  count: number;
}

export const TabIconWithBadge = (props: IProps) => {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
};

// const TabIconWithBadge = ({ iconName, count }) => {
//   return (
//     <>
//       <TabBarIcon name={iconName} color={colors.ui.primary} />
//       <Badge visible={true} style={{ position: "absolute" }}>
//         {count}
//       </Badge>
//     </>
//   );
// };
