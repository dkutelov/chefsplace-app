import * as React from "react";
import { RadioButton } from "react-native-paper";

type Item = {
  label: string;
  value: string;
};

interface IProps {
  items: Item[];
  value: string;
  setValue: (value: string) => void;
}

export const MyRadioButton = ({ items, value, setValue }: IProps) => {
  return (
    <RadioButton.Group onValueChange={(value) => setValue(value)} value={value}>
      {items.map(({ label, value }) => (
        <RadioButton.Item
          label={label}
          value={value}
          key={value}
          color={"green"}
          style={{ backgroundColor: "white" }}
          labelStyle={{ color: "green", textAlign: "left", paddingLeft: 8 }}
          position="leading"
        />
      ))}
    </RadioButton.Group>
  );
};
