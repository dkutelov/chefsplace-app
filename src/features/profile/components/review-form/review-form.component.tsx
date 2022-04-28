import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React from "react";
import { Formik } from "formik";

export const ReviewForm = () => {
  return (
    <View>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          //console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="Review product"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
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
          </View>
        )}
      </Formik>
    </View>
  );
};
