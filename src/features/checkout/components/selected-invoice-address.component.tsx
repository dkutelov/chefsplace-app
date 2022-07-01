import React, { useEffect, useState } from "react";
import { Text } from "@components/typography/text.component";
import { InvoiceAddress } from "@types/Profile";
import { Spacer } from "@components/spacer/spacer.component";
import { colors } from "@infrastructure/theme/colors";

export interface IProps {
  invoiceAddressId: string;
  addresses?: InvoiceAddress[];
}

export const SelectedInvoiceAddress = ({
  invoiceAddressId,
  addresses,
}: IProps) => {
  const [currentAddress, setCurrentAddress] = useState<InvoiceAddress | null>(
    null
  );

  useEffect(() => {
    if (!addresses || addresses.length === 0) {
      return;
    }
    const defaultAddress = addresses.find((x) => x.isDefault);
    if (defaultAddress) {
      setCurrentAddress(defaultAddress);
    }
  }, []);

  useEffect(() => {
    if (!addresses || addresses.length === 0 || !invoiceAddressId) {
      return;
    }
    const currentAddress = addresses.find((x) => x._id === invoiceAddressId);
    if (currentAddress) {
      setCurrentAddress(currentAddress);
    }
  }, [invoiceAddressId]);

  return (
    <Spacer position="top" size="small">
      <Spacer position="bottom" size="medium">
        <Text variant="title">Избрани данни за фактура</Text>
        {!currentAddress ? (
          <Text variant="body">Няма избрани данни за фактура</Text>
        ) : (
          <Spacer position="top" size="medium">
            <Text variant="body" style={{ color: colors.ui.primary }}>
              ({currentAddress?.addressName}) {currentAddress.postCode}{" "}
              {currentAddress.city} {currentAddress.addressLine}{" "}
              {currentAddress.addressLine2}{" "}
              {currentAddress.mol ? "МОЛ " + currentAddress.mol : ""}{" "}
              {currentAddress.eik ? "ЕИК " + currentAddress.eik : ""}{" "}
            </Text>
          </Spacer>
        )}
      </Spacer>
    </Spacer>
  );
};
