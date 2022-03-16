import React from "react";

import {
  CategoryCard,
  CategoryTitle,
  CategoryImage,
  CategoryTitleContainer,
  CategoryImageContainer,
} from "./category-list-item.styles";
import { Category } from "../../../../../types/Category";

export interface IProps {
  item: Category;
  borderColor: string;
  onCategoryPress: (id: string) => {};
}

const CategoryListItem = ({
  item: { id, name, imageUrl },
  borderColor,
  onCategoryPress,
}: IProps) => {
  return (
    <CategoryCard onPress={() => onCategoryPress(id)}>
      <CategoryImageContainer borderColor={borderColor}>
        <CategoryImage source={{ uri: imageUrl }} />
      </CategoryImageContainer>
      <CategoryTitleContainer>
        <CategoryTitle>{name}</CategoryTitle>
      </CategoryTitleContainer>
    </CategoryCard>
  );
};

export default CategoryListItem;
