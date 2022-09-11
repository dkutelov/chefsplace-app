import React, { useState, useContext, useEffect } from "react";
import { Formik } from "formik";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  InputField,
  FieldsContainer,
  HorizontalRow,
} from "./invoice-data-form.styles";
import { Button } from "../../button/button.component";
import Checkbox from "../checkbox/checkbox-component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DeliveryAddress, InvoiceAddress } from "../../../types/Profile";
import { AuthenticationContext } from "@services";
import {
  createInvoiceAddress,
  editInvoiceAddress,
} from "@infrastructure/api/users/invoice-address";
import { getConfig } from "@infrastructure/api/config";
import { Text } from "@components";
import { deliveryAddressToInvoiceData } from "@components/utils/getDeliveryToInvoiceAddress";
import { InvoiceAddressSchema } from "@components/utils";

export const InvoiceDataForm = () => {
  const { profile, fetchProfileById } = useContext(AuthenticationContext);
  const config = getConfig();
  const { params } = useRoute();
  const navigation = useNavigation();

  let defaultValues: InvoiceAddress = {
    addressId: null,
    addressName: "",
    companyName: "",
    eik: "",
    vatNumber: false,
    mol: "",
    phoneNumber: "",
    postCode: "",
    city: "",
    addressLine: "",
    addressLine2: "",
    isDefault: false,
  };

  if (params?.addressId) {
    const addressId = params.addressId;

    if (profile && profile.deliveryAddress) {
      const editAddress = profile.deliveryAddress.find(
        (x: DeliveryAddress) => x._id === addressId
      );

      if (editAddress) {
        defaultValues = deliveryAddressToInvoiceData({
          defaultValues,
          editAddress,
        });
      }
    }
  }

  if (params) {
    const addressId = params.invoiceAddressId;

    if (profile && profile.invoiceAddress) {
      const invoiceAddress = profile.invoiceAddress.find(
        (x: InvoiceAddress) => x._id === addressId
      );

      if (invoiceAddress) {
        if (invoiceAddress.vatNumber) {
          invoiceAddress.vatNumber = true;
        }
        defaultValues = { ...defaultValues, ...invoiceAddress };
      }
    }
  }

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Formik
        initialValues={defaultValues}
        validationSchema={InvoiceAddressSchema}
        onSubmit={async (values) => {
          console.log(values);
          if (profile && profile._id) {
            if (!params?.invoiceAddressId) {
              await createInvoiceAddress(config, profile._id, values);
              await fetchProfileById();
              navigation.pop(2);
            } else {
              await editInvoiceAddress(config, profile._id, values);
              await fetchProfileById();
              navigation.goBack();
            }
          }
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
              label="Име на Адреса"
              onChangeText={handleChange("addressName")}
              textContentType="name"
              keyboardType="default"
              autoCapitalize="words"
              value={values.addressName}
              style={{ paddingHorizontal: 0 }}
            />
            {errors.addressName && touched.addressName ? (
              <Text variant="error">{errors.addressName}</Text>
            ) : null}
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
                label="Пощ. код"
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

            <Checkbox
              checked={values?.isDefault}
              label="Данни за фактура по подразбиране"
              onCheckboxPress={() =>
                setFieldValue("isDefault", !values.isDefault)
              }
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
  );
};
