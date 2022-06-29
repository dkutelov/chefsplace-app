import React, { useState, useContext, useEffect } from "react";
import { Formik } from "formik";
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
import { createInvoiceAddress } from "@infrastructure/api/users/invoice-address";
import { getConfig } from "@infrastructure/api/config";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deliveryAddressToInvoiceData } from "@components/utils/getDeliveryToInvoiceAddress";

export const InvoiceDataForm = () => {
  const { profile, fetchProfileById } = useContext(AuthenticationContext);
  //const [addressId, setAddressId] = useState(null);
  const config = getConfig();
  const { params } = useRoute();
  const { goBack } = useNavigation();

  let defaultValues: InvoiceAddress = {
    addressId: null,
    addressName: "",
    companyName: "",
    eik: "",
    vatNumber: "",
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
        onSubmit={async (values) => {
          //TODO: validation

          //TODO: transform to DeliveryAddress type
          console.log(values);

          if (!params?.addressId) {
            if (profile && profile._id) {
              const newAddress = await createInvoiceAddress(
                config,
                profile._id,
                values
              );
            }
          } else {
            // await editDeliveryAddress(
            //   config,
            //   profile._id,
            //   params?.addressId,
            //   values
            // );
            // console.log("🧐");
          }
          await fetchProfileById();
          goBack();
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
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
            <InputField
              label="Име на Фирма"
              onChangeText={handleChange("companyName")}
              textContentType="name"
              keyboardType="default"
              autoCapitalize="words"
              value={values.companyName}
              style={{ paddingHorizontal: 0 }}
            />
            <HorizontalRow>
              <InputField
                label="ЕИК"
                onChangeText={handleChange("eik")}
                textContentType="postalCode"
                keyboardType="number-pad"
                value={values.eik}
                style={{ paddingHorizontal: 0, flexBasis: "49%" }}
              />
              <InputField
                label="Данъчен номер"
                onChangeText={handleChange("vatNumber")}
                textContentType="name"
                keyboardType="default"
                value={values.vatNumber}
                style={{ paddingHorizontal: 0, flexBasis: "49%" }}
              />
            </HorizontalRow>
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
            <InputField
              label="Адрес - жк, кв, ул, номер"
              onChangeText={handleChange("addressLine")}
              textContentType="streetAddressLine1"
              keyboardType="default"
              autoCapitalize="words"
              value={values.addressLine}
              style={{ paddingHorizontal: 0 }}
            />
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
