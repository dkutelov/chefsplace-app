import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { colors } from "@infrastructure/theme/colors";
import {
  ListItem,
  Title,
  IconsContainer,
  IconContainer,
} from "./list-item-edit-delete.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteDeliveryAddress } from "@infrastructure/api/users/delivery-address";
import { getConfig } from "@infrastructure/api/config";
import { AuthenticationContext } from "@services";

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
  const { navigate } = useNavigation();
  const { profile, fetchProfileById } = useContext(AuthenticationContext);
  const config = getConfig();

  const onEditPress = () => {
    navigate("NewDeliveryAddress", { addressId: itemId });
  };

  const onDeletePress = async () => {
    const userId = profile?._id ?? "";
    await deleteDeliveryAddress(config, userId, itemId);
    await fetchProfileById();
  };

  return (
    <ListItem onPress={onPressHandler}>
      <Title>{title}</Title>
      <IconsContainer>
        <IconContainer onPress={onEditPress}>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={24}
            color={colors.monochromes.onyx}
          />
        </IconContainer>
        <IconContainer onPress={onDeletePress}>
          <MaterialCommunityIcons
            name="delete"
            size={24}
            color={colors.ui.error}
          />
        </IconContainer>
      </IconsContainer>
    </ListItem>
  );
};
