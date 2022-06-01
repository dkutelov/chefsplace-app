import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { SafeArea } from "@components/utils/safe-area.component";
import { Button } from "@components/button/button.component";
import { ViewField } from "../../../components/view-field/view-field.component";
import { AddressContainer, HorizontalRow } from "../../profile.styles";

export const DeliveryAddressShowScreen = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  console.log(params);

  return (
    <>
      <SafeArea>
        <AddressContainer>
          <ViewField label="Име на адреса" text={params?.address.name ?? ""} />
          <HorizontalRow>
            <ViewField
              label="Име"
              text={params?.address.firstName ?? ""}
              containerStyles={{ flexBasis: "49%" }}
            />
            <ViewField
              label="Фамилия"
              text={params?.address.lastName ?? ""}
              containerStyles={{ flexBasis: "49%" }}
            />
          </HorizontalRow>
          <ViewField label="Телефон" text={params?.address.phoneNumber ?? ""} />
          <ViewField
            label="Фирма/ Обект"
            text={params?.address.company ?? ""}
          />
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
            label="Жк/Кв./Местност"
            text={params?.address.area ?? ""}
          />
          <HorizontalRow>
            <ViewField
              label="Ул./ бул."
              text={params?.address.street ?? ""}
              containerStyles={{ flexBasis: "76%" }}
            />
            <ViewField
              label="Номер"
              text={params?.address.number ?? ""}
              containerStyles={{ flexBasis: "23%" }}
            />
          </HorizontalRow>
          <HorizontalRow>
            <ViewField
              label="Блок"
              text={params?.address.block ?? ""}
              containerStyles={{ flexBasis: "28%" }}
            />
            <ViewField
              label="Вход"
              text={params?.address.entrance ?? ""}
              containerStyles={{ flexBasis: "22%" }}
            />
            <ViewField
              label="Етаж"
              text={params?.address.floor ?? ""}
              containerStyles={{ flexBasis: "22%" }}
            />
            <ViewField
              label="Ап."
              text={params?.address.apartment ?? ""}
              containerStyles={{ flexBasis: "22%" }}
            />
          </HorizontalRow>
          <ViewField label="Уточнения" text={params?.address.note ?? ""} />
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
