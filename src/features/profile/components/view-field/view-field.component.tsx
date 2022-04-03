import React from "react";
import { ViewFieldContainer, Label, Content } from "./view-field.styles";

interface IProps {
  label: string;
  text: string;
  containerStyles?: {
    [key: string]: any;
  };
}

export const ViewField = ({ label, text, containerStyles }: IProps) => {
  return (
    <ViewFieldContainer style={containerStyles}>
      <Label>{label}</Label>
      <Content>{text}</Content>
    </ViewFieldContainer>
  );
};
