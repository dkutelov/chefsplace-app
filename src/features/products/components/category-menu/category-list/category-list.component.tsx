import React, { useState, useCallback } from "react";
import { useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  ContainerView,
  CategoryFlatList,
  CategoryTitleContainer,
  CategoryTitle,
} from "./category-list.styles";
import mock from "../../../screens/mock.json";
import { Category } from "../../../../../types/Category";
import CategoryListItem from "../category-list-item/category-list-item.component";

interface IProps {
  filterProducts: (categoryId: string) => void;
}

export const CategoryMenu = ({ filterProducts }: IProps) => {
  const [showCategories, setShowCategories] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState("");
  const windowWidth = useWindowDimensions().width;
  const categories = mock;

  const onCategoryPress = useCallback((id: string) => {
    setActiveCategoryId(id);
    filterProducts(id);
  }, []);

  const toggleCetegoryMenu = () => {
    setShowCategories((prevState) => !prevState);
  };

  return (
    <>
      <CategoryTitleContainer onPress={toggleCetegoryMenu}>
        <CategoryTitle>Филтър по Категория</CategoryTitle>
        {showCategories ? (
          <Ionicons name="caret-up" size={20} color="black" />
        ) : (
          <Ionicons name="caret-down" size={20} color="black" />
        )}
      </CategoryTitleContainer>
      {showCategories && (
        <ContainerView>
          <CategoryFlatList
            data={categories}
            renderItem={({ item }: Category) => (
              <CategoryListItem
                item={item}
                borderColor={
                  item.id === activeCategoryId ? "#4b9301" : `#8f8f8f`
                }
                onCategoryPress={onCategoryPress}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={windowWidth - 8}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            viewabilityConfig={{
              viewAreaCoveragePercentThreshold: 50,
              minimumViewTime: 100,
            }}
            keyExtractor={(_, index) => index}
          />
        </ContainerView>
      )}
    </>
  );
};
