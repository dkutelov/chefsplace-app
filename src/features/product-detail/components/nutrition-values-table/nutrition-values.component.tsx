import React from "react";
import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { colors } from "../../../../infrastructure/theme/colors";

interface IItem {
  rowValues: { label: string; text: string };
}

const TableRow = ({ rowValues }: IItem) => {
  return (
    <DataTable.Row>
      <DataTable.Cell>{rowValues.label}</DataTable.Cell>
      <DataTable.Cell>{rowValues.text}</DataTable.Cell>
    </DataTable.Row>
  );
};

interface IProps {
  nutritionValues: { label: string; text: string; _id: string }[];
}

export const NutritionValues = ({ nutritionValues = [] }: IProps) => {
  return (
    <View style={{ paddingLeft: 8, paddingRight: 8 }}>
      <DataTable style={{ backgroundColor: colors.bg.tertiary }}>
        <DataTable.Header>
          <DataTable.Title>Показател</DataTable.Title>
          <DataTable.Title>на 100g</DataTable.Title>
        </DataTable.Header>
        {nutritionValues.map((rowValues) => (
          <TableRow key={rowValues._id} rowValues={rowValues} />
        ))}
      </DataTable>
    </View>
  );
};
