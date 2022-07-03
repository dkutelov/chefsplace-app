import React from "react";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

//Components
import { SafeArea } from "@components/utils/safe-area.component";
import { Button } from "@components/button/button.component";
import {
  InputField,
  FieldsContainer,
  HorizontalRow,
} from "@components/forms/address/address-form.styles";

export const GuesDeliveryAddressScreen = () => {
  const { goBack } = useNavigation();

  let defaultValues = {
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
  };

  return (
    <>
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
            onSubmit={async (values) => {
              //TODO: validation
              // first name and last name - min 3

              //TODO: save address to DB

              //Set address in cart context
              console.log(values);

              goBack();
            }}
          >
            {({ values, handleChange, handleSubmit, setFieldValue }) => (
              <FieldsContainer>
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
    </>
  );
};
