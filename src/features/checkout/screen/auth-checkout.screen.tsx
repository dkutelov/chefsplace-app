import React, { useState, useContext, useEffect } from "react";
import { TextInput } from "react-native-paper";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { initStripe, useStripe } from "@stripe/stripe-react-native";

//Styles
import {
  SectionContainer,
  CheckoutContainer,
  CheckoutSubtitle,
  SectionInnerContainer,
} from "../components/checkout-type-select.styles";

//Components
import { Text, Button, Spacer, MyRadioButton, MyPicker } from "@components";
import Checkbox from "@components/forms/checkbox/checkbox-component";
import { CartSummary } from "@features/cart/components/cart-summary/cart-summary.component";
import { SelectedDeliveryAddress } from "../components/selected-delivery-address.component";
import { SelectedInvoiceAddress } from "../components/selected-invoice-address.component";
import { CentertedLoadingIndicator } from "@components/loading/activity-indicator.component";

//Theme, Types
import { Order } from "@types/Order";
import { createUserOrder } from "@infrastructure/api/orders/create-user-order";
import { colors } from "@infrastructure/theme/colors";

//Context & Api
import { getConfig } from "@infrastructure/api/config";
import { AuthenticationContext, CartContext } from "@services";
import { getPaymentOptions } from "@infrastructure/utils/computed/getPaymentOptions";
import { getPublishableKey } from "@infrastructure/api/payment/get-stripe-publishable-key";
import { getPaymentIntent } from "@infrastructure/api/payment/get-payment-intent";

export const AuthCheckout = () => {
  //State
  const [paymentType, setPaymentType] = useState("0");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [deliveryAddressId, setDeliveryAddressId] = useState("");
  const [invoiceAddressId, setInvoiceAddressId] = useState("");
  const [savingOrder, setSavingOrder] = useState(false);
  const [note, setNote] = useState("");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [publishableKey, setPublishableKey] = useState<string | null>(null);

  //Context & Hooks
  const { cartItems } = useContext(CartContext);
  const { profile } = useContext(AuthenticationContext);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  //Navigation
  const { params } = useRoute();
  const config = getConfig();
  const { navigate } = useNavigation();

  //Stripe
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
        //Alert.alert("Грешка", "Няма ключ за плащане!");
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

  // const fetchPaymentIntent = async (sum) => {
  //   const { clientSecret } = await getPaymentIntent(config, sum);
  //   setClientSecret(clientSecret);
  // };

  const onTermsAgreed = () => {
    setTermsAgreed(!termsAgreed);
  };

  const setInvoiceAddress = (value: string) => {
    if (value === "0") {
      setInvoiceAddressId("");
    } else {
      setInvoiceAddressId(value);
    }
  };

  const getDeliveryCityName = () => {
    if (!profile || !profile.deliveryAddress) return;
    const selectedDeliveryAddress = profile?.deliveryAddress.find(
      (x) => x._id === deliveryAddressId
    );
    if (selectedDeliveryAddress) {
      return selectedDeliveryAddress.city;
    }
  };

  const deliveryCharge =
    Number(params?.deliveryCharge) !== NaN
      ? (Number(params?.deliveryCharge) * 100).toFixed(0)
      : 495;

  const placeOrder = async () => {
    if (profile && profile._id && cartItems.length > 0) {
      const order: Order = {
        userId: profile?._id,
        items: cartItems,
        deliveryAddressId: deliveryAddressId,
        invoiceAddressId: invoiceAddressId,
        deliveryCharge,
        payment: paymentType,
      };

      if (note) {
        order.note = note;
      }

      if (paymentType === "1") {
        order.status = "AWAITINGPAYMENT";
      } else if (paymentType == "2") {
        let orderAmount: Number;

        if (order.note == "free delievery for dari") {
          orderAmount = params?.cartAmount / 100;
        } else {
          orderAmount =
            (params?.cartAmount / 100 + params?.deliveryCharge) * 1.2;
        }
        const { clientSecret } = await getPaymentIntent(config, orderAmount);

        if (!clientSecret) {
          console.log("Error getting stripe client secret!");
          Alert.alert(`Сървърна грешка при плащане!`);
          return;
        }

        const { error } = await initPaymentSheet({
          paymentIntentClientSecret: clientSecret,
          merchantDisplayName: "Chefsplace",
          defaultBillingDetails: {
            address: {
              country: "BG",
            },
          },
        });

        if (error) {
          Alert.alert(
            `Сървърна грешка при плащане! ${error.code}`,
            error.message
          );
          return;
        }

        const { error: payError } = await presentPaymentSheet();

        if (payError) {
          Alert.alert(`Грешка при плащане: ${payError.code}`, payError.message);
          return;
        }
      }

      setSavingOrder(true);

      const result = await createUserOrder(config, profile._id, order);

      if (result.success) {
        setSavingOrder(false);
        // navigate("Success", { orderNumber: result.orderNumber });
        // if (paymentType === "2") {

        //   const amountToPay =
        //     (params?.cartAmount / 100 + params?.deliveryCharge) * 1.2;
        //   navigate("CreditCardPayment", {
        //     orderNumber: result.orderNumber,
        //     amount: amountToPay,
        //     orderNumber: result.orderNumber,
        //   });
        // } else {
        navigate("Success", { orderNumber: result.orderNumber });
        // }
      } else {
        console.log(error);
        navigate("CheckoutError");
      }
    }
  };

  if (savingOrder) {
    return <CentertedLoadingIndicator />;
  }

  return (
    <CheckoutContainer>
      <SectionContainer>
        <CheckoutSubtitle>Обобщение на поръчката</CheckoutSubtitle>
        <CartSummary
          amount={params?.cartAmount ?? 0}
          deliveryCharge={params?.deliveryCharge ?? 4.95}
        />
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Адрес на доставка</CheckoutSubtitle>
        <SectionInnerContainer>
          {profile?.deliveryAddress.length === 0 ? (
            <>
              <Spacer position="bottom" size="medium">
                <Text variant="body">Още нямате адрес(и) на доставка</Text>
              </Spacer>
            </>
          ) : (
            <>
              {profile?.deliveryAddress.length > 0 && (
                <SelectedDeliveryAddress
                  deliveryAddressId={deliveryAddressId}
                  addresses={profile?.deliveryAddress}
                  setDeliveryAddressId={setDeliveryAddressId}
                />
              )}
              {profile?.deliveryAddress.length > 1 && (
                <>
                  <Spacer position="top" size="medium">
                    <Spacer position="bottom" size="medium">
                      <Text variant="title">Избери друг адрес на доставка</Text>
                    </Spacer>
                    <MyPicker
                      items={profile?.deliveryAddress?.map((x) => ({
                        label: x.name,
                        value: x._id,
                      }))}
                      value={deliveryAddressId}
                      setValue={setDeliveryAddressId}
                    />
                  </Spacer>
                </>
              )}
            </>
          )}
          <Button
            text="Добави Нов Адрес"
            onButtonPress={() => {
              navigate("NewDeliveryAddress");
            }}
          />
        </SectionInnerContainer>
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Данни за фактура</CheckoutSubtitle>
        <SectionInnerContainer>
          {profile?.invoiceAddress?.length === 0 ? (
            <>
              <Spacer position="bottom" size="medium">
                <Text variant="body">
                  Още нямате данни за фактура. Ако желаете фактура, добавете
                  данни на фирмата.
                </Text>
              </Spacer>
            </>
          ) : (
            <>
              {profile?.invoiceAddress.length > 0 && (
                <SelectedInvoiceAddress
                  invoiceAddressId={invoiceAddressId}
                  addresses={profile?.invoiceAddress}
                  setInvoiceAddressId={setInvoiceAddressId}
                />
              )}
              {profile?.invoiceAddress.length > 1 && (
                <Spacer position="top" size="medium">
                  <Spacer position="bottom" size="medium">
                    <Text variant="title">Избери данни за фактура</Text>
                  </Spacer>
                  <MyPicker
                    items={profile?.invoiceAddress?.map((x) => ({
                      label: x.addressName,
                      value: x._id,
                    }))}
                    value={invoiceAddressId}
                    setValue={setInvoiceAddress}
                  />
                </Spacer>
              )}
            </>
          )}

          <Button
            text="Добави Данни за фактура"
            onButtonPress={() => {
              navigate("NewInvoiceDataAddress");
            }}
          />
        </SectionInnerContainer>
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Начин на плащане</CheckoutSubtitle>
        <SectionInnerContainer>
          <MyRadioButton
            value={paymentType}
            setValue={setPaymentType}
            items={getPaymentOptions(getDeliveryCityName())}
          />
        </SectionInnerContainer>
      </SectionContainer>
      <SectionContainer>
        <CheckoutSubtitle>Забележка</CheckoutSubtitle>
        <SectionInnerContainer>
          <TextInput
            mode="outlined"
            activeOutlineColor={colors.ui.primary}
            onChangeText={setNote}
            value={note}
          />
        </SectionInnerContainer>
      </SectionContainer>
      <Checkbox
        label="Съгласявам се безусловно с общите условия"
        checked={termsAgreed}
        onCheckboxPress={onTermsAgreed}
      />
      <SectionContainer>
        <Button
          disabled={!termsAgreed || !deliveryAddressId}
          text="ПОРЪЧВАМ"
          onButtonPress={placeOrder}
        />
      </SectionContainer>
    </CheckoutContainer>
  );
};
