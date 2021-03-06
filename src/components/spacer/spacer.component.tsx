import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position] || "top";
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

interface IProps {
  position: string;
  size: string;
  children: React.ReactNode;
  containerStyles?: {
    [key: string]: any;
  };
}

export const Spacer = ({
  position,
  size,
  children,
  containerStyles,
}: IProps) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return (
    <SpacerView variant={variant} {...containerStyles}>
      {children}
    </SpacerView>
  );
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
