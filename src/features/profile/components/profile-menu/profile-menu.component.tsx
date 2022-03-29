import React, { useContext } from "react";
import { List } from "react-native-paper";
import { colors } from "../../../../infrastructure/theme/colors";

import { AuthenticationContext } from "../../../../services/authentication/authentication.context";

export const ProfileMenu = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <>
      <List.Section>
        <List.Item
          style={{
            padding: 12,
            backgroundColor: "white",
            borderBottomWidth: "1px",
            borderBottomColor: colors.bg.gray,
          }}
          title="Адреси за Доставка"
          left={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.primary}
              icon="truck-delivery-outline"
            />
          )}
          right={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.secondary}
              icon="menu-right"
            />
          )}
          onPress={() => {}}
        />
        <List.Item
          style={{ padding: 12, backgroundColor: "white" }}
          title="Адреси за Фактуриране"
          left={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.primary}
              icon="pencil-box-outline"
            />
          )}
          right={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.secondary}
              icon="menu-right"
            />
          )}
          onPress={() => {}}
        />
      </List.Section>
      <List.Section>
        <List.Item
          style={{ padding: 16, backgroundColor: "white" }}
          title="Изход"
          left={(props) => <List.Icon {...props} color="red" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </>
  );
};
