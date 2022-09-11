import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { SafeArea } from "@components/utils/safe-area.component";
import { Button } from "@components/button/button.component";
import { ViewField } from "../../../components/view-field/view-field.component";
import { AddressContainer, HorizontalRow } from "../../profile.styles";

export const InvoiceAddressShowScreen = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();

  return (
    <>
      <SafeArea>
        <AddressContainer>
          <ViewField
            label="Име на адреса"
            text={params?.address.addressName ?? ""}
          />
          <ViewField
            label="Фирма/ Обект"
            text={params?.address.companyName ?? ""}
          />
          <HorizontalRow>
            <ViewField
              label="ЕИК"
              text={params?.address.eik ?? ""}
              containerStyles={{ flexBasis: "49%" }}
            />
            <ViewField
              label="ДДС номер"
              text={params?.address.vatNumber ? `BG${params?.address.eik}` : ""}
              containerStyles={{ flexBasis: "49%" }}
            />
          </HorizontalRow>
          <ViewField label="МОЛ" text={params?.address.mol ?? ""} />
          <ViewField label="Телефон" text={params?.address.phoneNumber ?? ""} />
          <HorizontalRow>
            <ViewField
              label="Нас. място"
              text={params?.address.city ?? ""}
              containerStyles={{ flexBasis: "76%" }}
            />
            <ViewField
              label="Пощ. код"
              text={params?.address.postCode ?? ""}
              containerStyles={{ flexBasis: "23%" }}
            />
          </HorizontalRow>
          <ViewField
            label="Адрес - жк, кв, ул, номер"
            text={params?.address.addressLine ?? ""}
          />
          <ViewField
            label="Адрес - бл, вх, ет, ап"
            text={params?.address.addressLine2 ?? ""}
          />
          <ViewField
            label="Адрес по подразбиране"
            text={params?.address.isDefault ? "Да" : "Не" ?? ""}
          />
        </AddressContainer>
        <Button
          text="OK"
          onButtonPress={() => goBack()}
          containerStyles={{ marginLeft: 16, marginRight: 16 }}
        />
      </SafeArea>
    </>
  );
};
