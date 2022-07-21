import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import {
  SectionContainer,
  CheckoutContainer,
  CheckoutSubtitle,
  SectionInnerContainer,
} from "../components/checkout-type-select.styles";

import { Spacer, Text, Button, CentertedLoadingIndicator } from "@components";
import { colors } from "@infrastructure/theme/colors";
import { CreditCardInput } from "../components/credit-card.component";
import { payRequest } from "@infrastructure/api/payment/pay-request";
import { getConfig } from "@infrastructure/api/config";

export const CreditCardPaymentScreen = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { params } = useRoute();
  const { navigate } = useNavigation();
  const config = getConfig();

  const onPay = async () => {
    setIsLoading(true);

    if (!card || !card.id) {
      setIsLoading(false);

      navigate("CheckoutError", {
        error: "Моля, въвете правилни данни!",
      });
      return;
    }

    const sum = params?.amount;

    if (!sum || sum === 0) {
      return;
    }

    try {
      const res = await payRequest(config, card.id, sum, name);
      console.log({ res });

      setIsLoading(false);
      navigate("Success", { orderNumber: params?.orderNumber || 0 });
      return;
    } catch (error) {
      setIsLoading(false);
      navigate("CheckoutError");
    }
  };

  if (isLoading) {
    return <CentertedLoadingIndicator />;
  }

  return (
    <CheckoutContainer>
      <SectionContainer>
        <CheckoutSubtitle style={{ textAlign: "center" }}>
          Плащане с банкова карта
        </CheckoutSubtitle>
        <Spacer position="top" size="large">
          <SectionInnerContainer>
            <Spacer position="bottom" size="large">
              <Text variant="body">
                Обща сума за плащане: {params?.amount.toFixed(2) || 0}лв.
              </Text>
            </Spacer>
            <Text variant="caption">Въведете данните от карта</Text>
            <Spacer position="top" size="large">
              <TextInput
                label="Име (както e изписано на картата)"
                activeUnderlineColor={colors.ui.primary}
                onChangeText={setName}
                value={name}
              />
            </Spacer>
            <Spacer position="top" size="large">
              <CreditCardInput
                name={name}
                onError={() => {
                  navigate("CheckoutError", {
                    error: "Грешка при обработка на данните на картата!",
                  });
                }}
                onSuccess={(c) => {
                  setCard(c);
                }}
              />
            </Spacer>
          </SectionInnerContainer>
        </Spacer>
      </SectionContainer>
      <SectionContainer>
        <Spacer position="top" size="large">
          <Button
            disabled={isLoading || !name || !card || !card.id}
            text="ПЛАЩАМ"
            onButtonPress={onPay}
          />
        </Spacer>
      </SectionContainer>
    </CheckoutContainer>
  );
};
