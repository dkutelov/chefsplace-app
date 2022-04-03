import React, { useContext } from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { MenuItem } from "@components/menu-item/menu-item.component";
import { colors } from "@infrastructure/theme/colors";

import { AuthenticationContext } from "@services/authentication/authentication.context";
import { ListItemEditDelete } from "@components/list-item-edit-delete/list-item-edit-delete.component";

export const AddressList = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <List.Section>
        <ListItemEditDelete
          title="Мой адрес 1"
          itemId="1"
          onPressHandler={() => {}}
        />
        <ListItemEditDelete
          title="Мой адрес 2"
          itemId="2"
          onPressHandler={() => {}}
        />
      </List.Section>
    </>
  );
};
