import React from "react";
import { Badge } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  count: number;
}

export const TabIconWithBadge = (props: IProps) => {
  return (
    <>
      <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />
      <Badge
        visible={props.count > 0}
        size={18}
        style={{ position: "absolute", top: 4, right: "20%" }}
      >
        {props.count}
      </Badge>
    </>
  );
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
