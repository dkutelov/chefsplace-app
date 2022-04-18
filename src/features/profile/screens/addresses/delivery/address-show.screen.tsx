import React from "react";
import { useNavigation } from "@react-navigation/native";

import { SafeArea } from "@components/utils/safe-area.component";
import { Button } from "@components/button/button.component";
import { ViewField } from "../../../components/view-field/view-field.component";
import { AddressContainer, HorizontalRow } from "../../profile.styles";

export const DeliveryAddressShowScreen = () => {
  const { goBack } = useNavigation();

  return (
    <>
      <SafeArea>
        <AddressContainer>
          <ViewField label="Име на адреса" text="Адрес 1" />
          <HorizontalRow>
            <ViewField
              label="Име"
              text="Дарий"
              containerStyles={{ flexBasis: "49%" }}
            />
            <ViewField
              label="Фамилия"
              text="Кутелов"
              containerStyles={{ flexBasis: "49%" }}
            />
          </HorizontalRow>
          <ViewField label="Телефон" text="0889611010" />
          <ViewField label="Фирма/ Обект" text="Дигиталс ООД" />
          <HorizontalRow>
            <ViewField
              label="Нас. място"
              text="София"
              containerStyles={{ flexBasis: "76%" }}
            />
            <ViewField
              label="Пощ. код"
              text="1421"
              containerStyles={{ flexBasis: "23%" }}
            />
          </HorizontalRow>
          <ViewField label="Жк/Кв./Местност" text="Лозенец" />
          <HorizontalRow>
            <ViewField
              label="Ул./ бул."
              text="Цветна Градина"
              containerStyles={{ flexBasis: "76%" }}
            />
            <ViewField
              label="Номер"
              text="1"
              containerStyles={{ flexBasis: "23%" }}
            />
          </HorizontalRow>
          <HorizontalRow>
            <ViewField
              label="Блок"
              text=""
              containerStyles={{ flexBasis: "28%" }}
            />
            <ViewField
              label="Вход"
              text="Б"
              containerStyles={{ flexBasis: "22%" }}
            />
            <ViewField
              label="Етаж"
              text="1"
              containerStyles={{ flexBasis: "22%" }}
            />
            <ViewField
              label="Ап."
              text="19"
              containerStyles={{ flexBasis: "22%" }}
            />
          </HorizontalRow>
          <ViewField label="Уточнения" text="Звънец Телексим" />
          <ViewField label="Адрес по подразбиране" text="Не" />
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
