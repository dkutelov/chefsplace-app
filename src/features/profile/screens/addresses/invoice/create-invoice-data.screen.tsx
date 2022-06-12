import React from "react";
import { InvoiceDataForm } from "@components/forms/invoice-data/invoice-data-form.component";
import { SafeArea } from "@components/utils/safe-area.component";

export const CreateInvoiceDataScreen = () => {
  return (
    <>
      <SafeArea>
        <InvoiceDataForm />
      </SafeArea>
    </>
  );
};
