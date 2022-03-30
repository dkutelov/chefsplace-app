import React from "react";
import { List } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";
import { ListItem } from "./menu-item.styles";

interface IProps {
  title: string;
  iconName: string;
  onPressHandler: () => void;
  rightIcon?: boolean;
  iconColor?: string;
}

export const MenuItem = ({
  title,
  iconName,
  onPressHandler,
  rightIcon = true,
  iconColor = colors.ui.primary,
}: IProps) => {
  return (
    <ListItem
      title={title}
      left={(props) => (
        <List.Icon {...props} color={iconColor} icon={iconName} />
      )}
      right={(props) =>
        rightIcon ? (
          <List.Icon {...props} color={colors.ui.secondary} icon="menu-right" />
        ) : null
      }
      onPress={onPressHandler}
    />
  );
};
