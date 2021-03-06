import React, { useContext } from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { AuthenticationContext } from "@services/authentication/authentication.context";
import { InvoiceAddressListItem } from "@components/list-item-edit-delete/invoice-address-list-item.component";
import {
  NoAddressMessage,
  LoadingContainer,
  AddressContainer,
} from "./address-list.styles";
import { LoadingIndicator } from "@components/loading/loading.component";

export const InvoiceDetailsList = () => {
  const { navigate } = useNavigation();
  const { profile } = useContext(AuthenticationContext);

  if (!profile)
    return (
      <LoadingContainer>
        <LoadingIndicator />
      </LoadingContainer>
    );

  if (!profile?.invoiceAddress || profile?.invoiceAddress?.length === 0) {
    return (
      <AddressContainer>
        <NoAddressMessage>Нямате данни за фактура</NoAddressMessage>
      </AddressContainer>
    );
  }

  return (
    <AddressContainer>
      {profile && (
        <List.Section>
          {profile.invoiceAddress.map((address) => (
            <InvoiceAddressListItem
              key={address._id}
              title={address.addressName}
              itemId={address._id}
              onPressHandler={() => {
                navigate("ViewInvoiceAddress", { address });
              }}
            />
          ))}
        </List.Section>
      )}
    </AddressContainer>
  );
};
