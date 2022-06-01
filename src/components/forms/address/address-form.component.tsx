import React, { useState, useContext, useEffect } from "react";
import { Formik } from "formik";
import {
  InputField,
  FieldsContainer,
  HorizontalRow,
} from "./address-form.styles";
import { Button } from "../../button/button.component";
import Checkbox from "../checkbox/checkbox-component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DeliveryAddress } from "@types/User";
import { AuthenticationContext } from "@services";
import {
  createDeliveryAddress,
  editDeliveryAddress,
} from "@infrastructure/api/users/delivery-address";
import { getConfig } from "@infrastructure/api/config";
import { useNavigation, useRoute } from "@react-navigation/native";

export const AddressForm = () => {
  const { profile, fetchProfileById } = useContext(AuthenticationContext);
  //const [addressId, setAddressId] = useState(null);
  const config = getConfig();
  const { params } = useRoute();
  const { goBack } = useNavigation();

  let defaultValues = {
    name: "",
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

  // let defaultValues = {
  //   name: "Адрес 2",
  //   firstName: "Дарий",
  //   lastName: "Кутелов",
  //   phoneNumber: "0889611010",
  //   company: "Дигиталс ООД",
  //   postCode: "1421",
  //   city: "София",
  //   area: "Лозенец",
  //   street: "ул. Цветна Градина",
  //   number: "1",
  //   block: "1",
  //   entrance: "Б",
  //   floor: "1",
  //   apartment: "19",
  //   note: "Звънец Телексим",
  //   isDefault: false,
  // };

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
          //console.log(values);

          if (!params?.addressId) {
            const newAddress = await createDeliveryAddress(
              config,
              profile._id,
              values
            );
          } else {
            await editDeliveryAddress(
              config,
              profile._id,
              params?.addressId,
              values
            );
            console.log("🧐");
          }
          await fetchProfileById();
          goBack();
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <FieldsContainer>
            <InputField
              label="Име на адреса"
              onChangeText={handleChange("name")}
              textContentType="name"
              keyboardType="default"
              autoCapitalize="sentences"
              value={values.name}
              style={{ paddingHorizontal: 0 }}
            />
            <InputField
              label="Име"
              onChangeText={handleChange("firstName")}
              textContentType="givenName"
              keyboardType="default"
              autoCapitalize="words"
              value={values.firstName}
              style={{ paddingHorizontal: 0 }}
            />
            <InputField
              label="Фамилия"
              onChangeText={handleChange("lastName")}
              textContentType="familyName"
              keyboardType="default"
              autoCapitalize="words"
              value={values.lastName}
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
            <InputField
              label="Фирма/ Обект"
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
