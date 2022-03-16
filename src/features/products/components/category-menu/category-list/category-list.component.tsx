import React, { useState, useCallback } from "react";
import { useWindowDimensions, TouchableWithoutFeedback } from "react-native";

import { ContainerView, CategoryFlatList } from "./category-list.styles";
import mock from "../../../screens/mock.json";
import { Category } from "../../../../../types/Category";
import CategoryListItem from "../category-list-item/category-list-item.component";

export const CategoryMenu = () => {
  const [activeCategoryId, setActiveCategoryId] = useState("");
  const windowWidth = useWindowDimensions().width;
  const categories = mock;

  const onCategoryPress = useCallback((id: string) => {
    setActiveCategoryId(id);
  }, []);

  return (
    <ContainerView>
      <CategoryFlatList
        data={categories}
        renderItem={({ item }: Category) => (
          <CategoryListItem
            item={item}
            borderColor={item.id === activeCategoryId ? "#4b9301" : `#8f8f8f`}
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
  );
};
