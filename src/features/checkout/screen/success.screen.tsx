import React, { useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@infrastructure/theme/colors";
import {
  ContentContainer,
  SuccessTitle,
  SuccessMessage,
  HomeButton,
} from "../components/success.styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CartContext } from "@services";

const SIZE = 128;

export const Success = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "EMPTY_CART" });
  }, []);

  const goHome = () => {
    navigate("CartScreen");
  };

  return (
    <ContentContainer>
      <SuccessTitle>Thank You!</SuccessTitle>
      <Ionicons
        name="checkmark-circle-outline"
        size={SIZE}
        color={colors.ui.primary}
      />
      <SuccessMessage>
        Благодарим Ви! Успешно направихте поръчка № {params?.orderNumber || "0"}
        .
      </SuccessMessage>
      <HomeButton onPress={goHome}>ЗАТВОРИ</HomeButton>
    </ContentContainer>
  );
};
