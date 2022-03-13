import React from "react";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../../infrastructure/theme/colors";
import {
  CategoryCard,
  CategoryTitle,
  IconWrapper,
} from "./category-list-item.styles";

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
      <IconWrapper>
        <Entypo
          name="chevron-small-right"
          size={24}
          color={colors.ui.secondary}
        />
      </IconWrapper>
    </CategoryCard>
  );
};

export default CategoryListItem;
