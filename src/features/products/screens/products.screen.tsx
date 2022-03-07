import React, { useContext } from "react";

import { SafeArea, ProductList } from "./products.styles";
import { ProductCard } from "../components/product-card.component";
import { ProductsContext } from "../../../services/products/products.context";
import { LoadingIndicator } from "../../../components/loading/loading.component";
import { colors } from "../../../infrastructure/theme/colors";

export const ProductListScreen = () => {
  const { products, filteredProducts, isLoading, error } =
    useContext(ProductsContext);

  const renderProducts =
    filteredProducts.length === 0 ? products : filteredProducts;
  return (
    <SafeArea>
      {isLoading ? (
        <LoadingIndicator size={32} color={colors.ui.primary} />
      ) : (
        <ProductList
          data={renderProducts}
          renderItem={(item) => <ProductCard item={item.item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeArea>
  );
};
