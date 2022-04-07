import * as React from "react";
import { Picker } from "@react-native-picker/picker";

type Item = {
  label: string;
  value: string;
};

interface IProps {
  items: Item[];
  value: string;
  setValue: (value: string) => void;
}

export const MyPicker = ({ items, value, setValue }: IProps) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
    >
      {items.map(({ label, value }) => (
        <Picker.Item
          label={label}
          value={value}
          key={value}
          color={"green"}
          style={{ backgroundColor: "white" }}
        />
      ))}
    </Picker>
  );
};
