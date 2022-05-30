import React, { useContext } from "react";
import { List } from "react-native-paper";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MenuItem } from "@components/menu-item/menu-item.component";
import { colors } from "@infrastructure/theme/colors";

import { AuthenticationContext } from "@services/authentication/authentication.context";
import { ListItemEditDelete } from "@components/list-item-edit-delete/list-item-edit-delete.component";

export const AddressList = () => {
  const { navigate } = useNavigation();
  const { profile } = useContext(AuthenticationContext);

  if (!profile?.deliveryAddress || profile?.deliveryAddress?.length === 0) {
    return (
      <View>
        <Text style={{ textAlign: "center", padding: "15px 0" }}>
          Нямате адреси за доставка
        </Text>
      </View>
    );
  }

  return (
    <>
      {profile && (
        <List.Section>
          {profile.deliveryAddress.map((address) => (
            <ListItemEditDelete
              key={address._id}
              title={address.name}
              itemId={address._id}
              onPressHandler={() => {
                navigate("ViewAddress");
              }}
            />
          ))}
        </List.Section>
      )}
    </>
  );
};
