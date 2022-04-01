import { ScrollView, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import {
  InputField,
  FieldsContainer,
  HorizontalRow,
} from "./address-form.styles";
import { Button } from "../../button/button.component";
import { Spacer } from "../../spacer/spacer.component";

export const AddressForm = () => {
  const defaultValues = {
    firstName: "Дарий",
    lastName: "Кутелов",
    phoneNumber: "0889611010",
    company: "Grill And The Game",
    postCode: "1000",
    city: "Токио",
    area: "Шинджику",
    street: "Гинза",
    number: "1",
    block: "32",
    entrance: "А",
    floor: "5",
    apartment: "16",
    note: "I like sushi",
  };

  return (
    <ScrollView>
      <Formik
        initialValues={defaultValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <FieldsContainer>
            <InputField
              label="Име"
              onChangeText={props.handleChange("firstName")}
              textContentType="givenName"
              keyboardType="default"
              autoCapitalize="words"
              value={props.values.firstName}
              style={{ paddingHorizontal: 0 }}
            />
            <InputField
              label="Фамилия"
              onChangeText={props.handleChange("lastName")}
              textContentType="familyName"
              keyboardType="default"
              autoCapitalize="words"
              value={props.values.lastName}
              style={{ paddingHorizontal: 0 }}
            />
            <InputField
              label="Телефон"
              onChangeText={props.handleChange("phoneNumber")}
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              value={props.values.phoneNumber}
              style={{ paddingHorizontal: 0 }}
            />
            <InputField
              label="Фирма/ Обект"
              onChangeText={props.handleChange("company")}
              textContentType="name"
              keyboardType="default"
              autoCapitalize="sentences"
              value={props.values.company}
              style={{ paddingHorizontal: 0 }}
            />
            <HorizontalRow>
              <InputField
                label="Нас. място"
                onChangeText={props.handleChange("city")}
                textContentType="addressCity"
                keyboardType="default"
                autoCapitalize="words"
                value={props.values.city}
                style={{ paddingHorizontal: 0, flexBasis: "76%" }}
              />
              <InputField
                label="Пощ. код"
                onChangeText={props.handleChange("postCode")}
                textContentType="postalCode"
                keyboardType="numeric"
                value={props.values.postCode}
                style={{
                  paddingHorizontal: 0,
                  flexBasis: "22%",
                  marginLeft: "2%",
                }}
              />
            </HorizontalRow>
            <InputField
              label="Жк/ Кв./ Местност"
              onChangeText={props.handleChange("area")}
              textContentType="addressCity"
              keyboardType="default"
              autoCapitalize="words"
              value={props.values.area}
              style={{ paddingHorizontal: 0 }}
            />
            <HorizontalRow>
              <InputField
                label="Ул./ бул."
                onChangeText={props.handleChange("street")}
                textContentType="addressCity"
                keyboardType="default"
                autoCapitalize="words"
                value={props.values.street}
                style={{ paddingHorizontal: 0, flexBasis: "76%" }}
              />
              <InputField
                label="Номер"
                onChangeText={props.handleChange("number")}
                textContentType="streetAddressLine1"
                keyboardType="default"
                value={props.values.number}
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
                onChangeText={props.handleChange("block")}
                textContentType="addressCity"
                keyboardType="default"
                autoCapitalize="words"
                value={props.values.block}
                style={{ paddingHorizontal: 0, flexBasis: "28%" }}
              />
              <InputField
                label="Вход"
                onChangeText={props.handleChange("entrance")}
                textContentType="streetAddressLine1"
                keyboardType="default"
                value={props.values.entrance}
                style={{
                  paddingHorizontal: 0,
                  flexBasis: "22%",
                  marginLeft: "2%",
                }}
              />
              <InputField
                label="Етаж"
                onChangeText={props.handleChange("floor")}
                textContentType="streetAddressLine1"
                keyboardType="numeric"
                value={props.values.floor}
                style={{
                  paddingHorizontal: 0,
                  flexBasis: "22%",
                  marginLeft: "2%",
                }}
              />
              <InputField
                label="Ап."
                onChangeText={props.handleChange("apartment")}
                textContentType="streetAddressLine1"
                keyboardType="numeric"
                value={props.values.apartment}
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
              onChangeText={props.handleChange("note")}
              textContentType="addressCity"
              keyboardType="default"
              value={props.values.note}
              style={{ paddingHorizontal: 0 }}
            />
            <Spacer position="top" size="large">
              <Button
                text="Запиши"
                disabled={false}
                onButtonPress={() => props.handleSubmit()}
              />
            </Spacer>
          </FieldsContainer>
        )}
      </Formik>
    </ScrollView>
  );
};
