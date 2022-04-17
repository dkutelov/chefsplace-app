import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Dimensions } from "react-native";
const cardWidth = (Dimensions.get("window").width - 20) / 2;

import {
  CategoryCard,
  CategoryTitle,
  CategoryImage,
  CategoryTitleContainer,
} from "./category-list-item.styles";
import { Category } from "@types/Category";
import { K } from "@infrastructure/constants";

export interface IProps {
  item: Category;
}

const CategoryListItem = ({ item: { id, name, imageUrl } }: IProps) => {
  const { navigate } = useNavigation();

  const onCategoryPress = () => {
    navigate("Products", { screen: "ProductsScreen", params: { id } });
  };

  return (
    <CategoryCard onPress={onCategoryPress} width={cardWidth}>
      <CategoryImage source={{ uri: K.categoryBaseUrl + imageUrl }} />
      <CategoryTitleContainer>
        <CategoryTitle>{name}</CategoryTitle>
      </CategoryTitleContainer>
    </CategoryCard>
  );
};

export default CategoryListItem;
