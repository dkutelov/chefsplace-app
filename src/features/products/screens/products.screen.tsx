import React, { useContext, useEffect, useState, useRef } from "react";
import { useRoute } from "@react-navigation/native";

// Types & Constants
import { ProductList as ProductListType } from "@types/Product";
import { colors } from "@infrastructure/theme/colors";

// Context
import { ProductsContext } from "@services/products/products.context";

// Components
import { CategoryMenu } from "../components/category-menu/category-list/category-list.component";
import { ProductList } from "../components/products/product-list/product-list.component";
import { LoadingIndicator } from "@components/loading/loading.component";

// Styles
import { SafeArea } from "./products.styles";

export const ProductListScreen = () => {
  const { products, isLoading, searchTerm, error, categories, dispatch } =
    useContext(ProductsContext);
  const [allProducts, _] = useState(products);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filteredProducts, setSetFilteredProducts] = useState<
    ProductListType[]
  >([]);
  const [errorLoadingCategories, setErrorLoadingCategories] = useState<
    string | null
  >(null);

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
    const categoryProducts: ProductListType[] = allProducts.filter(
      (p: ProductListType) => p.category === categoryId
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
      const categoryProducts: ProductListType[] = allProducts.filter(
        (p: ProductListType) => p.category === params.id
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
