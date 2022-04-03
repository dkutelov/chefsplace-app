import React, { useContext } from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { MenuItem } from "@components/menu-item/menu-item.component";
import { colors } from "@infrastructure/theme/colors";

import { AuthenticationContext } from "@services/authentication/authentication.context";

export const AddressList = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <List.Section>
        <MenuItem title="Моите Поръчки" onPressHandler={() => {}} />
        <MenuItem title="Поръчай Отново" onPressHandler={() => {}} />
      </List.Section>
    </>
  );
};
