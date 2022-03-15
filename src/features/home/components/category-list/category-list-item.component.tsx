import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  CategoryCard,
  CategoryTitle,
  CategoryImage,
  CategoryTitleContainer,
} from "./category-list-item.styles";
import { Category } from "../../../../types/Category";

export interface IProps {
  item: Category;
}

const CategoryListItem = ({ item: { id, name, imageUrl } }: IProps) => {
  const { navigate } = useNavigation();

  const onCategoryPress = () => {
    navigate("ProductsScreen", { id });
  };

  //TODO: Category Image
  return (
    <CategoryCard onPress={onCategoryPress}>
      <CategoryImage source={{ uri: imageUrl }} />
      <CategoryTitleContainer>
        <CategoryTitle>{name}</CategoryTitle>
      </CategoryTitleContainer>
    </CategoryCard>
  );
};

export default CategoryListItem;
