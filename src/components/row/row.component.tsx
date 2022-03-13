import React from "react";
import { View, Text } from "react-native";
import { RowWrapper, Title } from "./row.styles";

interface IProps {
  title?: string;
  children: React.ReactNode;
}

export const Row = ({ children, title }: IProps) => {
  return (
    <RowWrapper>
      {title && <Title>{title}</Title>}
      {children}
    </RowWrapper>
  );
};
