import { Platform, Linking, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Caption } from "react-native-paper";
import { Spacer } from "@components";

export const Container = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: center;
`;

export const PhoneContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ServerErrorScreen = () => {
  const dialCall = (number: string) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    try {
      Linking.openURL(phoneNumber);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <MaterialIcons
        name="error-outline"
        size={128}
        color={colors.monochromes.onyx}
      />
      <Text>Няма връзка със сървъра!</Text>
      <Spacer position="top" size="large">
        <Caption>Свържете се със системния администратор</Caption>
        <PhoneContainer>
          <MaterialIcons name="smartphone" size={24} color="black" />
          <Text
            onPress={() => {
              dialCall("0889621010");
            }}
          >
            0889621010
          </Text>
        </PhoneContainer>
      </Spacer>
    </Container>
  );
};
