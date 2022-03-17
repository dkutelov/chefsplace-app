import React, { useContext, useEffect, useState, useRef } from "react";
import { useRoute } from "@react-navigation/native";

import { SafeArea } from "./products.styles";
import { ProductsContext } from "../../../services/products/products.context";
import { LoadingIndicator } from "../../../components/loading/loading.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Product } from "../../../types/Product";
import { CategoryMenu } from "../components/category-menu/category-list/category-list.component";
import { ProductList } from "../components/products/product-list/product-list.component";

export const ProductListScreen = () => {
  const { products, isLoading, searchTerm, error, dispatch } =
    useContext(ProductsContext);
  const [allProducts, _] = useState(products);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filteredProducts, setSetFilteredProducts] = useState<Product[]>([]);
  const { params } = useRoute();

  //TODO: Custom back icon
  //TODO: Category name

  useEffect(() => {
    if (searchTerm !== "") {
      const searchResults = allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchTerm!)
      );
      setSetFilteredProducts(searchResults);
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
      setSetFilteredProducts([]);
    }
  }, [searchTerm]);

  const filterProducts = (categoryId: string) => {
    setSetFilteredProducts([]);
    const categoryProducts: Product[] = allProducts.filter(
      (p: Product) => p.categoryId === categoryId
    );
    setIsFiltered(true);
    setSetFilteredProducts(categoryProducts);
  };

  const clearCategoryFilter = () => {
    setIsFiltered(false);
    setSetFilteredProducts([]);
  };

  useEffect(() => {
    if (params) {
      const categoryProducts: Product[] = allProducts.filter(
        (p: Product) => p.categoryId === params.id
      );
      setIsFiltered(true);
      setSetFilteredProducts(categoryProducts);
    }
  }, [params?.id, allProducts]);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingIndicator size={32} color={colors.ui.primary} />
      ) : (
        <>
          <CategoryMenu
            filterProducts={filterProducts}
            clearCategoryFilter={clearCategoryFilter}
          />
          {isFiltered ? (
            <ProductList products={filteredProducts} />
          ) : (
            <ProductList products={allProducts} />
          )}
        </>
      )}
    </SafeArea>
  );
};
