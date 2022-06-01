import React, { useContext } from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { AuthenticationContext } from "@services/authentication/authentication.context";
import { ListItemEditDelete } from "@components/list-item-edit-delete/list-item-edit-delete.component";
import {
  NoAddressMessage,
  LoadingContainer,
  AddressContainer,
} from "./address-list.styles";
import { LoadingIndicator } from "@components/loading/loading.component";

export const AddressList = () => {
  const { navigate } = useNavigation();
  const { profile } = useContext(AuthenticationContext);

  if (!profile)
    return (
      <LoadingContainer>
        <LoadingIndicator />
      </LoadingContainer>
    );

  if (!profile?.deliveryAddress || profile?.deliveryAddress?.length === 0) {
    return (
      <AddressContainer>
        <NoAddressMessage>Нямате адреси за доставка</NoAddressMessage>
      </AddressContainer>
    );
  }

  return (
    <AddressContainer>
      {profile && (
        <List.Section>
          {profile.deliveryAddress.map((address) => (
            <ListItemEditDelete
              key={address._id}
              title={address.name}
              itemId={address._id}
              onPressHandler={() => {
                navigate("ViewAddress", { address });
              }}
            />
          ))}
        </List.Section>
      )}
    </AddressContainer>
  );
};
