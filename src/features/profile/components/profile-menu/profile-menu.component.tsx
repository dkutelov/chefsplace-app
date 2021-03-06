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
          onPressHandler={() => {
            navigate("OrderList");
          }}
        />
        <MenuItem
          title="Поръчай Отново"
          iconName="repeat"
          onPressHandler={() => {
            navigate("OrderAgain");
          }}
        />
      </List.Section>
      <List.Section>
        <MenuItem
          title="Смяна на парола"
          iconName="pencil-box-outline"
          onPressHandler={() => {
            navigate("EditProfile");
          }}
        />
        <MenuItem
          title="Адреси за Доставка"
          iconName="truck-delivery-outline"
          onPressHandler={() => {
            navigate("DeliveryAddressList");
          }}
        />
        <MenuItem
          title="Данни за Фактура"
          iconName="file-document-outline"
          onPressHandler={() => {
            navigate("InvoiceAddressList");
          }}
        />
      </List.Section>
      <List.Section>
        <MenuItem
          title="Общи Условия"
          iconName="alert-box-outline"
          onPressHandler={() => {
            navigate("Terms");
          }}
        />
        <MenuItem
          title="Свръжи се с Нас"
          iconName="contacts-outline"
          onPressHandler={() => {
            navigate("Contact");
          }}
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
