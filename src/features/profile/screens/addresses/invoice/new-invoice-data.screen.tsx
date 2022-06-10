import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { AuthenticationContext } from "@services";

//Components
import { SafeArea } from "@components/utils/safe-area.component";
import { Text } from "@components/typography/text.component";
import { Spacer } from "@components/spacer/spacer.component";
import { MyPicker } from "@components/forms/picker/picker.component";
import { Button } from "@components/button/button.component";

export const NewInvoiceDataScreen = () => {
  const { profile } = useContext(AuthenticationContext);
  const [deliveryAddressId, setDeliveryAddressId] = useState("");
  const { navigate } = useNavigation();

  console.log(deliveryAddressId);

  const openNewAdressScreen = () => {
    navigate("NewInvoiceDataAddress");
  };

  return (
    <>
      <SafeArea>
        <Text variant="label">
          Искате ли да използвате данни от съществуващ адрес за доставка?
        </Text>
        {profile?.deliveryAddress.length > 1 && (
          <Spacer position="top" size="medium">
            <Text variant="body">Адреси на доставка</Text>
            <MyPicker
              items={profile?.deliveryAddress?.map((x) => ({
                label: x.name,
                value: x._id,
              }))}
              value={deliveryAddressId}
              setValue={setDeliveryAddressId}
            />
          </Spacer>
        )}
        <Button
          text="Нови данни за фактура без да се използва копиране от адрес на доставка"
          onButtonPress={openNewAdressScreen}
          containerStyles={{ marginLeft: 16, marginRight: 16 }}
        />
      </SafeArea>
    </>
  );
};
