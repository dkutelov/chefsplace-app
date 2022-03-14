import React from "react";
import { Button, TextInput, View } from "react-native";
import { Formik, FormikHelpers } from "formik";

interface Values {
  email: string;
  password: string;
}

export const AuthForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
      console.log(values);
      setSubmitting(false);
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
        />
        <TextInput
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
        />
        <Button onPress={() => handleSubmit()} title="Регистрация" />
      </View>
    )}
  </Formik>
);
