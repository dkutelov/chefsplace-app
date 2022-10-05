import React, { useState, useEffect } from "react";
import { initStripe, useConfirmPayment } from "@stripe/stripe-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { Alert } from "react-native";
import {
  SectionContainer,
  CheckoutContainer,
  CheckoutSubtitle,
  SectionInnerContainer,
} from "../components/checkout-type-select.styles";

import { Spacer, Text, Button, CentertedLoadingIndicator } from "@components";
import { colors } from "@infrastructure/theme/colors";
import { getConfig } from "@infrastructure/api/config";

import { getPublishableKey } from "@infrastructure/api/payment/get-stripe-publishable-key";
import { CreditCardField } from "../components/credit-card-payment.styles";
import { getPaymentIntent } from "@infrastructure/api/payment/get-payment-intent";

export const CreditCardPaymentScreen = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { params } = useRoute();
  const { navigate } = useNavigation();
  const config = getConfig();
  const { confirmPayment, loading } = useConfirmPayment();

  const [publishableKey, setPublishableKey] = useState<string | null>(null);

  useEffect(() => {
    if (publishableKey) return;

    async function init() {
      try {
        const { publishableKey } = await getPublishableKey(config);
        if (publishableKey) {
          setPublishableKey(publishableKey);
        }
      } catch (error) {
        console.log(error);
        Alert.alert("Грешка", "Няма ключ за плащане!");
      }
    }
    init();
  }, []);

  useEffect(() => {
    if (publishableKey) {
      initStripe({
        publishableKey,
      });
    }
  }, [publishableKey]);

  const onPay = async () => {
    let sum = params?.amount;

    if (!sum || sum === 0) {
      return;
    }

    if (!name) return;
    setIsLoading(true);
    const { clientSecret } = await getPaymentIntent(config, sum);
    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      paymentMethodType: "Card",
      paymentMethodData: {
        billingDetails: { name },
      },
    });

    if (error) {
      setIsLoading(false);

      navigate("CheckoutError", {
        error: `Грешка код: ${error.code}, ${error.message}`,
      });
      return;
    } else if (paymentIntent) {
      setIsLoading(false);
      navigate("Success", { orderNumber: params?.orderNumber || 0 });
      return;
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
              <CreditCardField />
            </Spacer>
            <Spacer position="top" size="large">
              <TextInput
                label="ИМЕ (както e изписано на картата)"
                autoCapitalize="none"
                keyboardType="name-phone-pad"
                activeUnderlineColor={colors.ui.primary}
                onChangeText={setName}
                value={name}
              />
            </Spacer>
          </SectionInnerContainer>
        </Spacer>
      </SectionContainer>
      <SectionContainer>
        <Spacer position="top" size="large">
          <Button
            disabled={isLoading || loading}
            text="ПЛАТИ"
            onButtonPress={onPay}
          />
        </Spacer>
      </SectionContainer>
    </CheckoutContainer>
  );
};
