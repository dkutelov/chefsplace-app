import * as React from "react";
import { Picker } from "@react-native-picker/picker";
import { colors } from "@infrastructure/theme/colors";

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
      mode="dropdown"
      style={{
        backgroundColor: colors.monochromes.veryLightGray,
        borderRadius: 8,
      }}
    >
      <Picker.Item
        label="Избери адрес"
        value="0"
        key={101}
        style={{ color: colors.ui.primary }}
      />
      {items.map(({ label, value }) => (
        <Picker.Item
          label={label}
          value={value}
          key={value}
          style={{ color: colors.ui.primary }}
        />
      ))}
    </Picker>
  );
};
