import React from "react";
import { colors } from "@infrastructure/theme/colors";

import { CentertedLoadingContainer, Loading } from "./loading.styles";

interface IProps {
  size?: number;
  color?: string;
  height?: number;
}

export const CentertedLoadingIndicator = ({
  size = 50,
  color = colors.ui.secondary,
  height = 500,
}: IProps) => (
  <CentertedLoadingContainer height={height}>
    <Loading size={size} animating={true} color={color} />
  </CentertedLoadingContainer>
);
