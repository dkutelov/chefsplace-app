import React from "react";
import { useNavigation } from "@react-navigation/native";

import { CategoryCard, CategoryTitle } from "./category-list-item.styles";

export interface IProps {
  item: {
    id: string;
    name: string;
  };
}

const CategoryListItem = ({ item: { id, name } }: IProps) => {
  const { navigate } = useNavigation();

  const onCategoryPress = () => {
    navigate("ProductsScreen", { id });
  };

  return (
    <CategoryCard onPress={onCategoryPress}>
      <CategoryTitle>{name}</CategoryTitle>
    </CategoryCard>
  );
};

export default CategoryListItem;
