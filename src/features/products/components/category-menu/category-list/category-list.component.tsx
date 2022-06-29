import React, { useState, useCallback, useContext, useEffect } from "react";
import { Pressable, useWindowDimensions, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  ContainerView,
  CategoryFlatList,
  CategoryTitleContainer,
  CategoryTitle,
  CategoryNameWrapper,
  CategoryName,
  NoCategory,
  NoCategoryWrapper,
} from "./category-list.styles";

import { Category } from "@types/Product";
import CategoryListItem from "../category-list-item/category-list-item.component";
import { colors } from "../../../../../infrastructure/theme/colors";
import { ProductsContext } from "@services/products/products.context";

interface IProps {
  filterProducts: (categoryId: string) => void;
  clearCategoryFilter: () => void;
  categoryId: string;
}

export const CategoryMenu = ({
  filterProducts,
  clearCategoryFilter,
  categoryId,
}: IProps) => {
  const [showCategories, setShowCategories] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState<string>("");
  const windowWidth = useWindowDimensions().width;
  const { categories } = useContext(ProductsContext);

  useEffect(() => {
    if (categoryId) {
      setShowCategories(true);
      setActiveCategoryId(categoryId);

      getCategoryName(categoryId);
    }
  }, [categoryId]);

  const getCategoryName = (id: string) => {
    categories.forEach((x) => {
      if (x.id === id) {
        setCategoryName(x.name);
      }
    });
  };

  const onCategoryPress = useCallback(
    (id: string) => {
      if (id == activeCategoryId) {
        clearCategoryFilter();
        setActiveCategoryId("");
        setCategoryName("");
      } else {
        setActiveCategoryId(id);
        filterProducts(id);
        getCategoryName(id);
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

  const clearCetegoryMenu = () => {
    setActiveCategoryId("");
    clearCategoryFilter();
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
        <>
          {activeCategoryId !== "" ? (
            <CategoryNameWrapper>
              <CategoryName>{categoryName}</CategoryName>
              <Pressable
                onPress={clearCetegoryMenu}
                style={{ flexBasis: "10%" }}
              >
                <Ionicons
                  name="close-circle-outline"
                  size={24}
                  color={colors.ui.orange}
                />
              </Pressable>
            </CategoryNameWrapper>
          ) : (
            <NoCategoryWrapper>
              <NoCategory>Няма избрана категория</NoCategory>
            </NoCategoryWrapper>
          )}

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
        </>
      )}
    </>
  );
};
