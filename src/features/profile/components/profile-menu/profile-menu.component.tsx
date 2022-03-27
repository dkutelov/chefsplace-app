import React, { useContext } from "react";
import { List } from "react-native-paper";

import { AuthenticationContext } from "../../../../services/authentication/authentication.context";

export const ProfileMenu = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <List.Section>
      <List.Item
        style={{ padding: 16, backgroundColor: "white" }}
        title="Изход"
        left={(props) => <List.Icon {...props} color="red" icon="door" />}
        onPress={onLogout}
      />
    </List.Section>
  );
};
