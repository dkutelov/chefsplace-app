import React from "react";
import { Text } from "@components/typography/text.component";
import { InvoiceAddress } from "@types/Profile";
import { Spacer } from "@components/spacer/spacer.component";
import { colors } from "@infrastructure/theme/colors";

export interface IProps {
  invoiceAddress: InvoiceAddress;
}

export const ShowInvoiceAddress = ({ invoiceAddress }: IProps) => {
  return (
    <Spacer position="top" size="small">
      <Spacer position="bottom" size="medium">
        <Text
          variant="body"
          style={{
            color: colors.text.tertiary,
            fontSize: 18,
          }}
        >
          Въведени данни за фактура
        </Text>

        <Spacer position="top" size="medium">
          <Text
            variant="body"
            style={{
              color: colors.monochromes.onyx,
              lineHeight: 20,
            }}
          >
            {invoiceAddress?.companyName
              ? "Фирма: " + invoiceAddress.companyName
              : ""}
            {invoiceAddress.eik ? ", ЕИК " + invoiceAddress.eik : ""}{" "}
            {invoiceAddress.vatNumber ? ", ДДС № BG" + invoiceAddress.eik : ""}{" "}
            {invoiceAddress?.postCode
              ? ", пк " + invoiceAddress.postCode + " "
              : ""}
            {invoiceAddress.city}{" "}
            {invoiceAddress.addressLine
              ? ", " + invoiceAddress.addressLine
              : ""}{" "}
            {invoiceAddress.addressLine2
              ? ",  " + invoiceAddress.addressLine2
              : ""}{" "}
            {invoiceAddress.mol ? ", МОЛ " + invoiceAddress.mol : ""}{" "}
            {invoiceAddress.phoneNumber
              ? ", тел " + invoiceAddress.phoneNumber
              : ""}{" "}
          </Text>
        </Spacer>
      </Spacer>
    </Spacer>
  );
};
