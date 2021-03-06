import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { AuthenticationContext } from "@services";

//Components
import { SafeArea } from "@components/utils/safe-area.component";
import { Text } from "@components/typography/text.component";
import { Spacer } from "@components/spacer/spacer.component";
import { MyPicker } from "@components/forms/picker/picker.component";
import { Button } from "@components/button/button.component";

//Styles
import { ContentContainer, Separator } from "./new-invoice-data.styles";
import { colors } from "@infrastructure/theme/colors";

export const NewInvoiceDataScreen = () => {
  const { profile } = useContext(AuthenticationContext);
  const [deliveryAddressId, setDeliveryAddressId] = useState("0");
  const { navigate } = useNavigation();

  const openNewInvoiceDataScreen = () => {
    if (deliveryAddressId) {
      navigate("CreateInvoiceData", {
        addressId: deliveryAddressId,
      });
    }
  };

  return (
    <>
      <SafeArea>
        <ContentContainer>
          {profile?.deliveryAddress.length >= 1 ? (
            <Spacer position="top" size="large">
              <Text
                variant="title"
                style={{
                  textAlign: "center",
                  color: colors.ui.primary,
                  fontWeight: "bold",
                }}
              >
                Копирай от адрес за доставка?
              </Text>
              <Spacer position="top" size="xl" />
              <Text variant="body" style={{ color: colors.ui.secondary }}>
                Избери адрес на доставка
              </Text>
              <Spacer position="top" size="medium">
                <MyPicker
                  items={profile?.deliveryAddress?.map((x) => ({
                    label: x.name,
                    value: x._id,
                  }))}
                  value={deliveryAddressId}
                  setValue={setDeliveryAddressId}
                />
              </Spacer>
              <Spacer position="top" size="medium">
                <Button
                  disabled={deliveryAddressId === "0"}
                  text="Данни за фактура"
                  onButtonPress={openNewInvoiceDataScreen}
                />
              </Spacer>
            </Spacer>
          ) : (
            <Spacer position="top" size="large">
              <Text
                variant="label"
                style={{ color: colors.ui.primary, textAlign: "center" }}
              >
                Все още нямате създадени адреси на доставка
              </Text>
            </Spacer>
          )}
        </ContentContainer>
        <ContentContainer style={{ marginTop: "auto" }}>
          <Spacer position="top" size="large">
            <Text
              variant="title"
              style={{
                textAlign: "center",
                color: colors.ui.primary,
                fontWeight: "bold",
              }}
            >
              Без копиране от адрес за доставка
            </Text>
            <Spacer position="top" size="large" />
            <Button
              text="Данни за фактура"
              onButtonPress={() => {
                navigate("CreateInvoiceData");
              }}
            />
          </Spacer>
        </ContentContainer>
      </SafeArea>
    </>
  );
};
