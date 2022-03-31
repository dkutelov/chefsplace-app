import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React from "react";
import { Formik } from "formik";
import { InputField, FieldsContainer } from "./address-form.styles";

//   label="Имейл"
//           value={email}
//           textContentType="emailAddress"
//           keyboardType="email-address"
//           autoCapitalize="none"
// onChangeText = {(u) => setEmail(u)}

export const AddressForm = () => {
  return (
    <View>
      <Formik
        initialValues={{ city: "", body: "", rating: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <FieldsContainer>
            <InputField
              label="Град"
              onChangeText={props.handleChange("city")}
              textContentType="addressCity"
              keyboardType="default"
              autoCapitalize="words"
              value={props.values.city}
              style={{ paddingHorizontal: 0 }}
            />
            <TextInput
              multiline
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
            />
            <Button
              title="Submit"
              color="maroon"
              onPress={() => props.handleSubmit()}
            />
          </FieldsContainer>
        )}
      </Formik>
    </View>
  );
};
