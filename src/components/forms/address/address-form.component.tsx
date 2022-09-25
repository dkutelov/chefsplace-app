import React, { useContext } from "react";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  InputField,
  FieldsContainer,
  HorizontalRow,
} from "./address-form.styles";
import { Text } from "@components";
import { Button } from "../../button/button.component";
import Checkbox from "../checkbox/checkbox-component";
import { DeliveryAddress } from "@types/User";
import { AuthenticationContext } from "@services";
import {
  createDeliveryAddress,
  editDeliveryAddress,
} from "@infrastructure/api/users/delivery-address";
import { getConfig } from "@infrastructure/api/config";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DeliveryAddressSchema } from "@components/utils";

export const AddressForm = () => {
  const { profile, fetchProfileById } = useContext(AuthenticationContext);
  const config = getConfig();
  const { params } = useRoute();
  const { goBack } = useNavigation();

  const nextDeliveryAddressName = profile
    ? profile.deliveryAddress
      ? profile.deliveryAddress.length + 1
      : ""
    : "";

  let defaultValues = {
    name: `Моя адрес ${nextDeliveryAddressName}`,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    company: "",
    postCode: "",
    city: "",
    area: "",
    street: "",
    number: "",
    block: "",
    entrance: "",
    floor: "",
    apartment: "",
    note: "",
    isDefault: false,
  };

  if (params?.addressId) {
    const addressId = params.addressId;
    //setAddressId(addressId);

    if (profile && profile.deliveryAddress) {
      const editAddress = profile.deliveryAddress.find(
        (x: DeliveryAddress) => x._id === addressId
      );

      defaultValues = { ...defaultValues, ...editAddress };
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
        validationSchema={DeliveryAddressSchema}
        onSubmit={async (values) => {
          //TODO: transform to DeliveryAddress type

          if (!params?.addressId) {
            try {
              const newAddress = await createDeliveryAddress(
                config,
                profile._id,
                values
              );
            } catch (error) {
              console.log(error.toString());
            }
          } else {
            await editDeliveryAddress(
              config,
              profile._id,
              params?.addressId,
              values
            );
          }
          await fetchProfileById();
          goBack();
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
              onChangeText={handleChange("name")}
              placeholder="Име на адреса като: У дома, В офиса"
              textContentType="name"
              keyboardType="default"
              autoCapitalize="sentences"
              value={values.name}
              style={{ paddingHorizontal: 0 }}
            />
            {errors.name && touched.name ? (
              <Text variant="error">{errors.name}</Text>
            ) : null}
            <InputField
              label="Име"
              onChangeText={handleChange("firstName")}
              textContentType="givenName"
              keyboardType="default"
              autoCapitalize="words"
              value={values.firstName}
              style={{ paddingHorizontal: 0 }}
            />
            {errors.firstName && touched.firstName ? (
              <Text variant="error">{errors.firstName}</Text>
            ) : null}
            <InputField
              label="Фамилия"
              onChangeText={handleChange("lastName")}
              textContentType="familyName"
              keyboardType="default"
              autoCapitalize="words"
              value={values.lastName}
              style={{ paddingHorizontal: 0 }}
            />
            {errors.lastName && touched.lastName ? (
              <Text variant="error">{errors.lastName}</Text>
            ) : null}
            <InputField
              label="Телефон"
              onChangeText={handleChange("phoneNumber")}
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              value={values.phoneNumber}
              style={{ paddingHorizontal: 0 }}
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <Text variant="error">{errors.phoneNumber}</Text>
            ) : null}
            <InputField
              label="Име на обект"
              onChangeText={handleChange("company")}
              textContentType="name"
              keyboardType="default"
              autoCapitalize="sentences"
              value={values.company}
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
            {errors.city && touched.city ? (
              <Text variant="error">{errors.city}</Text>
            ) : null}
            {errors.postCode && touched.postCode ? (
              <Text variant="error">{errors.postCode}</Text>
            ) : null}
            <InputField
              label="Жк/ Кв./ Местност"
              onChangeText={handleChange("area")}
              textContentType="addressCity"
              keyboardType="default"
              autoCapitalize="words"
              value={values.area}
              style={{ paddingHorizontal: 0 }}
            />
            <HorizontalRow>
              <InputField
                label="Ул./ бул."
                onChangeText={handleChange("street")}
                textContentType="addressCity"
                keyboardType="default"
                autoCapitalize="words"
                value={values.street}
                style={{ paddingHorizontal: 0, flexBasis: "76%" }}
              />
              <InputField
                label="Номер"
                onChangeText={handleChange("number")}
                textContentType="streetAddressLine1"
                keyboardType="default"
                value={values.number}
                style={{
                  paddingHorizontal: 0,
                  flexBasis: "22%",
                  marginLeft: "2%",
                }}
              />
            </HorizontalRow>
            <HorizontalRow>
              <InputField
                label="Блок"
                onChangeText={handleChange("block")}
                textContentType="addressCity"
                keyboardType="default"
                autoCapitalize="words"
                value={values.block}
                style={{ paddingHorizontal: 0, flexBasis: "28%" }}
              />
              <InputField
                label="Вход"
                onChangeText={handleChange("entrance")}
                textContentType="streetAddressLine1"
                keyboardType="default"
                value={values.entrance}
                style={{
                  paddingHorizontal: 0,
                  flexBasis: "22%",
                  marginLeft: "2%",
                }}
              />
              <InputField
                label="Етаж"
                onChangeText={handleChange("floor")}
                textContentType="streetAddressLine1"
                keyboardType="numeric"
                value={values.floor}
                style={{
                  paddingHorizontal: 0,
                  flexBasis: "22%",
                  marginLeft: "2%",
                }}
              />
              <InputField
                label="Ап."
                onChangeText={handleChange("apartment")}
                textContentType="streetAddressLine1"
                keyboardType="numeric"
                value={values.apartment}
                style={{
                  paddingHorizontal: 0,
                  flexBasis: "22%",
                  marginLeft: "2%",
                }}
              />
            </HorizontalRow>
            <InputField
              label="Уточнения"
              multiline
              numberOfLines={3}
              onChangeText={handleChange("note")}
              textContentType="addressCity"
              keyboardType="default"
              value={values.note}
              style={{ paddingHorizontal: 0 }}
            />
            <Checkbox
              checked={values?.isDefault}
              label="Адрес по подразбиране"
              onCheckboxPress={() =>
                setFieldValue("isDefault", !values.isDefault)
              }
            />
            <Button text="Запиши" onButtonPress={() => handleSubmit()} />
          </FieldsContainer>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};
