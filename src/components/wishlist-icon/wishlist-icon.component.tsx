import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { WishlistContainer } from "./wishlist-icon.styles";
import { colors } from "../../infrastructure/theme/colors";

interface IProps {
  isWishlisted: boolean;
  toggleWishlisted: () => void;
}

export const WishlistIcon = ({ isWishlisted, toggleWishlisted }: IProps) => {
  return (
    <WishlistContainer onPress={toggleWishlisted}>
      {isWishlisted ? (
        <Ionicons name="heart" size={34} color={colors.ui.primary} />
      ) : (
        <Ionicons name="heart-outline" size={34} color={colors.ui.primary} />
      )}
    </WishlistContainer>
  );
};
