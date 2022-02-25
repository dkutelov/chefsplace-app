import React from "react";
import { colors } from "../../infrastructure/theme/colors";

import { LoadingContainer, Loading } from "./loading.styles";

interface IProps {
  size: number;
  color: string;
}

export const LoadingIndicator = ({
  size = 50,
  color = colors.ui.secondary,
}: IProps) => (
  <LoadingContainer>
    <Loading size={size} animating={true} color={color} />
  </LoadingContainer>
);
