import React, { useContext } from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { MenuItem } from "../../../../components/menu-item/menu-item.component";
import { colors } from "../../../../infrastructure/theme/colors";

import { AuthenticationContext } from "../../../../services/authentication/authentication.context";

export const ProfileMenu = () => {
  const { onLogout } = useContext(AuthenticationContext);
  const { navigate } = useNavigation();
  return (
    <>
      <List.Section>
        <MenuItem
          title="Моите Поръчки"
          iconName="reload"
          onPressHandler={() => {}}
        />
        <MenuItem
          title="Поръчай Отново"
          iconName="repeat"
          onPressHandler={() => {}}
        />
      </List.Section>
      <List.Section>
        <MenuItem
          title="Редактиране Профил"
          iconName="pencil-box-outline"
          onPressHandler={() => {}}
        />
        <MenuItem
          title="Адреси за Доставка"
          iconName="truck-delivery-outline"
          onPressHandler={() => {
            console.log("hi");

            navigate("DeliveryAddressList");
          }}
        />
        <MenuItem
          title="Данни за Фактура"
          iconName="file-document-outline"
          onPressHandler={() => {}}
        />
      </List.Section>
      <List.Section>
        <MenuItem
          title="Общи Условия"
          iconName="alert-box-outline"
          onPressHandler={() => {}}
        />
        <MenuItem
          title="Свръжи се с Нас"
          iconName="contacts-outline"
          onPressHandler={() => {}}
        />
      </List.Section>
      <List.Section>
        <MenuItem
          title="Изход"
          iconName="door"
          onPressHandler={onLogout}
          rightIcon={false}
          iconColor={colors.ui.error}
        />
      </List.Section>
    </>
  );
};
