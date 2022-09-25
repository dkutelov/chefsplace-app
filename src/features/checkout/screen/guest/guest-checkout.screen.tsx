import React, { useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native-paper";

import {
  SectionContainer,
  CheckoutContainer,
  CheckoutSubtitle,
  SectionInnerContainer,
} from "../../components/checkout-type-select.styles";

//Components
import { CartSummary } from "@features/cart/components/cart-summary/cart-summary.component";
import { Button } from "@components/button/button.component";
import Checkbox from "@components/forms/checkbox/checkbox-component";
import { MyRadioButton } from "@components/forms/radio-button/radio-buttton.component";
import { Text } from "@components/typography/text.component";
import { ShowDeliveryAddress } from "../../components/delivery-address.component";
import { CentertedLoadingIndicator } from "@components/loading/activity-indicator.component";

//Types and Context
import { CartContext } from "@services";
import { ShowInvoiceAddress } from "@features/checkout/components/invoice-address.component";
import { getPaymentOptions } from "@infrastructure/utils/computed/getPaymentOptions";
import { Order } from "@types/Order";

import { getConfig } from "@infrastructure/api/config";
import { createGuestOrder } from "@infrastructure/api/orders/create-guest-order";
import { colors } from "@infrastructure/theme/colors";

export const GuestCheckout = () => {
  //State
  const [paymentType, setPaymentType] = useState("0");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);
  const [note, setNote] = useState("");
  //Hooks, context and config
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const config = getConfig();
  const { cartItems, guestDeliveryAddress, guestInvoiceAddress } =
    useContext(CartContext);

  const onTermsAgreed = () => {
    setTermsAgreed(!termsAgreed);
  };

  const placeOrder = async () => {
    if (cartItems && cartItems.length > 0 && guestDeliveryAddress) {
      const order: Order = {
        items: cartItems,
        deliveryAddressId: guestDeliveryAddress._id,
        invoiceAddressId: guestInvoiceAddress ? guestInvoiceAddress._id : null,
        payment: paymentType,
      };

      if (note) {
        order.note = note;
      }

      setSavingOrder(true);
      const result = await createGuestOrder(config, order);
      if (result.success) {
        setSavingOrder(false);
        navigate("Success", { orderNumber: result.orderNumber });
        // if (paymentType === "2") {
        //   const amountToPay =
        //     (params?.cartAmount / 100 + params?.deliveryCharge) * 1.2;
        //   navigate("CreditCardPayment", {
        //     orderNumber: result.orderNumber,
        //     amount: amountToPay,
        //   });
        // } else {
        //   navigate("Success", { orderNumber: result.orderNumber });
        // }
      } else {
        console.log(result);
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
          {guestDeliveryAddress && (
            <ShowDeliveryAddress deliveryAddress={guestDeliveryAddress} />
          )}
          <Button
            text={
              !guestDeliveryAddress
                ? "Добави Адрес На Доставка"
                : "Друг Адрес На Доставка"
            }
            onButtonPress={() => {
              navigate("NewGuestDeliveryAddress");
            }}
          />
        </SectionInnerContainer>
        <CheckoutSubtitle>Данни за фактура</CheckoutSubtitle>
        <SectionInnerContainer>
          {guestInvoiceAddress ? (
            <ShowInvoiceAddress invoiceAddress={guestInvoiceAddress} />
          ) : (
            <Text variant="body">Ако желаете фактура, моля добавете данни</Text>
          )}
          <Button
            text={
              !guestInvoiceAddress
                ? "Добави данни за фактура"
                : "Промени данни за фактура"
            }
            onButtonPress={() => {
              navigate("NewGuestInvoiceAddress");
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
            items={getPaymentOptions(guestDeliveryAddress?.city || "")}
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
          disabled={!termsAgreed || !guestDeliveryAddress}
          text="ПОРЪЧВАМ"
          onButtonPress={placeOrder}
        />
      </SectionContainer>
    </CheckoutContainer>
  );
};
