import React, { useState, useContext, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";

//Components
import {
  InputField,
  FieldsContainer,
  HorizontalRow,
} from "@components/forms/invoice-data/invoice-data-form.styles";
import { Button, Text, SafeArea, Checkbox } from "@components";

//Types and context
import { DeliveryAddress, InvoiceAddress } from "@types/Profile";
import { CartContext } from "@services";

import { createGuestInvoiceAddress } from "@infrastructure/api/users/invoice-address";

import { getConfig } from "@infrastructure/api/config";
import { SET_GUEST_INVOICE_ADDRESS } from "@services/cart/cart.action-types";

import { deliveryAddressToInvoiceData } from "@components/utils/getDeliveryToInvoiceAddress";
import { GuestInvoiceAddressSchema } from "@components/utils";

export const GuestInvoiceAddressScreen = () => {
  const config = getConfig();
  const navigation = useNavigation();
  const { guestDeliveryAddress, dispatch } = useContext(CartContext);

  let defaultValues: InvoiceAddress = {
    addressId: null,
    companyName: "",
    eik: "",
    vatNumber: false,
    mol: "",
    phoneNumber: "",
    postCode: "",
    city: "",
    addressLine: "",
    addressLine2: "",
  };

  if (guestDeliveryAddress) {
    defaultValues = deliveryAddressToInvoiceData({
      defaultValues,
      editAddress: guestDeliveryAddress,
    });
  }

  return (
    <SafeArea>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <Formik
          initialValues={defaultValues}
          validationSchema={GuestInvoiceAddressSchema}
          onSubmit={async (values) => {
            //Save address to DB
            try {
              const res = await createGuestInvoiceAddress(config, values);

              if (res.success) {
                const createdAddress = res.address;

                if (createdAddress) {
                  delete createdAddress.__v;
                  //Set address in cart context
                  dispatch({
                    type: SET_GUEST_INVOICE_ADDRESS,
                    payload: createdAddress,
                  });
                }
              }
            } catch (error) {
              console.log(error);
            }

            navigation.goBack();
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
          }) => (
            <FieldsContainer>
              <InputField
                label="Име на Фирма"
                onChangeText={handleChange("companyName")}
                textContentType="name"
                keyboardType="default"
                autoCapitalize="words"
                value={values.companyName}
                style={{ paddingHorizontal: 0 }}
              />
              {errors.companyName && touched.companyName ? (
                <Text variant="error">{errors.companyName}</Text>
              ) : null}
              <HorizontalRow>
                <InputField
                  label="ЕИК"
                  onChangeText={handleChange("eik")}
                  textContentType="postalCode"
                  keyboardType="number-pad"
                  value={values.eik}
                  style={{ paddingHorizontal: 0, flexBasis: "49%" }}
                />
                <Checkbox
                  checked={values?.vatNumber}
                  label="Регистрация по ДДС"
                  onCheckboxPress={() =>
                    setFieldValue("vatNumber", !values.vatNumber)
                  }
                />
              </HorizontalRow>
              {errors.eik && touched.eik ? (
                <Text variant="error">{errors.eik}</Text>
              ) : null}
              <InputField
                label="МОЛ"
                onChangeText={handleChange("mol")}
                textContentType="name"
                keyboardType="default"
                autoCapitalize="words"
                value={values.mol}
                style={{ paddingHorizontal: 0 }}
              />
              <InputField
                label="Телефон"
                onChangeText={handleChange("phoneNumber")}
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
                value={values.phoneNumber}
                style={{ paddingHorizontal: 0 }}
              />
              <HorizontalRow>
                <InputField
                  label="Нас. място"
                  onChangeText={handleChange("city")}
                  textContentType="addressCity"
                  keyboardType="default"
                  autoCapitalize="words"
                  value={values.city}
                  style={{ paddingHorizontal: 0, flexBasis: "76%" }}
                />
                <InputField
                  label="ПК"
                  onChangeText={handleChange("postCode")}
                  textContentType="postalCode"
                  keyboardType="numeric"
                  value={values.postCode}
                  style={{
                    paddingHorizontal: 0,
                    flexBasis: "22%",
                    marginLeft: "2%",
                  }}
                />
              </HorizontalRow>
              <HorizontalRow>
                {errors.city && touched.city ? (
                  <Text variant="error">{errors.city}</Text>
                ) : null}
                {errors.postCode && touched.postCode ? (
                  <Text variant="error">{errors.postCode}</Text>
                ) : null}
              </HorizontalRow>
              <InputField
                label="Адрес - жк, кв, ул, номер"
                onChangeText={handleChange("addressLine")}
                textContentType="streetAddressLine1"
                keyboardType="default"
                autoCapitalize="words"
                value={values.addressLine}
                style={{ paddingHorizontal: 0 }}
              />
              {errors.addressLine && touched.addressLine ? (
                <Text variant="error">{errors.addressLine}</Text>
              ) : null}
              <InputField
                label="Адрес - бл, вх, ет, ап"
                onChangeText={handleChange("addressLine2")}
                textContentType="streetAddressLine2"
                keyboardType="default"
                autoCapitalize="words"
                value={values.addressLine2}
                style={{ paddingHorizontal: 0 }}
              />
              <Button
                text="Запиши"
                disabled={false}
                onButtonPress={() => handleSubmit()}
              />
            </FieldsContainer>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeArea>
  );
};
