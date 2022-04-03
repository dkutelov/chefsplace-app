import React from "react";
import { useNavigation } from "@react-navigation/native";

import { SafeArea } from "@components/utils/safe-area.component";
import { AddressList } from "../components/address-list/address-list.component";
import { Button } from "@components/button/button.component";

export const AddressListScreen = () => {
  const { navigate } = useNavigation();
  const openNewAdressScreen = () => {
    navigate("NewDeliveryAddress");
  };

  return (
    <>
      <SafeArea>
        <AddressList />
        <Button
          text="Добави Нов Адрес"
          onButtonPress={openNewAdressScreen}
          containerStyles={{ marginLeft: 16, marginRight: 16 }}
        />
      </SafeArea>
    </>
  );
};
