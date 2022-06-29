import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { SafeArea } from "@components/utils/safe-area.component";
import { InvoiceDetailsList } from "../../../components/address-list/invoice-details-list.component";
import { Button } from "@components/button/button.component";
import { AuthenticationContext } from "@services";

export const InvoiceDetailsListScreen = () => {
  const { navigate } = useNavigation();
  const { profile } = useContext(AuthenticationContext);

  const openNewAdressScreen = () => {
    if (
      profile &&
      profile.invoiceAddress &&
      profile.invoiceAddress.length === 0
    ) {
      navigate("CreateInvoiceData");
    } else {
      navigate("NewInvoiceDataAddress");
    }
  };

  return (
    <>
      <SafeArea>
        <InvoiceDetailsList />
        <Button
          text="Добави данни за фактура"
          onButtonPress={openNewAdressScreen}
          containerStyles={{ marginLeft: 16, marginRight: 16 }}
        />
      </SafeArea>
    </>
  );
};
