import React from "react";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../../infrastructure/theme/colors";
import { CategoryCard, CategoryTitle } from "./category-list-item.styles";

export interface IProps {
  item: {
    id: string;
    name: string;
  };
}

const CategoryListItem = ({ item: { id, name } }: IProps) => {
  const onCategoryPress = () => {
    console.warn("hi");
  };

  return (
    <CategoryCard onPress={onCategoryPress}>
      <CategoryTitle>{name}</CategoryTitle>
    </CategoryCard>
  );
};

export default CategoryListItem;
