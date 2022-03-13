import React, { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeArea, ProductList } from "./products.styles";
import { ProductCard } from "../components/product-card.component";
import { ProductsContext } from "../../../services/products/products.context";
import { LoadingIndicator } from "../../../components/loading/loading.component";
import { colors } from "../../../infrastructure/theme/colors";
import {
  FILTER_PRODUCTS_BY_CATEGORY,
  RESET_FILTERED_PRODUCTS,
} from "../../../services/products/products.action-types";

export const ProductListScreen = () => {
  const { filteredProducts, isLoading, error, dispatch } =
    useContext(ProductsContext);
  const { params } = useRoute();

  useEffect(() => {
    if (params) {
      dispatch({
        type: FILTER_PRODUCTS_BY_CATEGORY,
        payload: {
          categoryId: params.id,
        },
      });
    } else {
      dispatch({
        type: RESET_FILTERED_PRODUCTS,
      });
    }
  }, []);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingIndicator size={32} color={colors.ui.primary} />
      ) : (
        <ProductList
          data={filteredProducts}
          renderItem={(item) => <ProductCard item={item.item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeArea>
  );
};
