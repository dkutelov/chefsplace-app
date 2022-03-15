import React from "react";
import { useWindowDimensions } from "react-native";

import { ContainerView, CategoryFlatList } from "./category-list.styles";
import mock from "../../../screens/mock.json";
import { Category } from "../../../../../types/Category";
import CategoryListItem from "../category-list-item/category-list-item.component";

export const CategoryMenu = () => {
  const windowWidth = useWindowDimensions().width;
  const categories = mock;

  const onFlatlistUpdate = React.useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      console.log(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <ContainerView>
      <CategoryFlatList
        data={categories}
        renderItem={({ item }: Category) => <CategoryListItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 8}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
          minimumViewTime: 100,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
        keyExtractor={(_, index) => index}
      />
    </ContainerView>
  );
};
