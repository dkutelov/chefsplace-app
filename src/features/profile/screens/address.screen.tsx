import React from "react";
import { AddressForm } from "@components/forms/address/address-form.component";
import { SafeArea } from "@components/utils/safe-area.component";

export const AddressScreen = () => {
  return (
    <>
      <SafeArea>
        <AddressForm />
      </SafeArea>
    </>
  );
};
