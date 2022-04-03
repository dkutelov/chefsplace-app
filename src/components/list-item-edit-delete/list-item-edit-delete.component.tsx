import React from "react";

import { colors } from "@infrastructure/theme/colors";
import {
  ListItem,
  Title,
  IconsContainer,
  IconContainer,
} from "./list-item-edit-delete.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IProps {
  title: string;
  itemId: string;
  onPressHandler: () => void;
}

export const ListItemEditDelete = ({
  title,
  itemId,
  onPressHandler,
}: IProps) => {
  const onEditPress = () => {};
  const onDeletePress = () => {};
  return (
    <ListItem onPress={onPressHandler}>
      <Title>{title}</Title>
      <IconsContainer>
        <IconContainer onPress={onEditPress}>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={28}
            color={colors.monochromes.onix}
          />
        </IconContainer>
        <IconContainer onPress={onDeletePress}>
          <MaterialCommunityIcons
            name="delete"
            size={28}
            color={colors.ui.error}
          />
        </IconContainer>
      </IconsContainer>
    </ListItem>
  );
};
