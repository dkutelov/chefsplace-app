import React, { useState, useCallback, useContext } from "react";
import { useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  ContainerView,
  CategoryFlatList,
  CategoryTitleContainer,
  CategoryTitle,
} from "./category-list.styles";

import { Category } from "@types/Product";
import CategoryListItem from "../category-list-item/category-list-item.component";
import { colors } from "../../../../../infrastructure/theme/colors";
import { ProductsContext } from "@services/products/products.context";

interface IProps {
  filterProducts: (categoryId: string) => void;
  clearCategoryFilter: () => void;
}

export const CategoryMenu = ({
  filterProducts,
  clearCategoryFilter,
}: IProps) => {
  const [showCategories, setShowCategories] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string>("");
  const windowWidth = useWindowDimensions().width;
  const { categories } = useContext(ProductsContext);

  const onCategoryPress = useCallback(
    (id: string) => {
      if (id == activeCategoryId) {
        clearCategoryFilter();
        setActiveCategoryId("");
      } else {
        setActiveCategoryId(id);
        filterProducts(id);
      }
    },
    [activeCategoryId]
  );

  const toggleCetegoryMenu = () => {
    if (showCategories) {
      setActiveCategoryId("");
      clearCategoryFilter();
    }
    setShowCategories((prevState) => !prevState);
  };

  return (
    <>
      <CategoryTitleContainer onPress={toggleCetegoryMenu}>
        <CategoryTitle>Филтър по Категория</CategoryTitle>
        {showCategories ? (
          <Ionicons name="caret-up" size={20} color={colors.monochromes.onyx} />
        ) : (
          <Ionicons
            name="caret-down"
            size={20}
            color={colors.monochromes.ony}
          />
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
                  item.id === activeCategoryId
                    ? colors.ui.primary
                    : colors.monochromes.onyx
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
