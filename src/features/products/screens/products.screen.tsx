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
  const { products, isLoading, searchTerm } = useContext(ProductsContext);
  const [allProducts, _] = useState(products);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductListType[]>(
    []
  );
  const [categoryId, setCategoryId] = useState<string>("");

  const { params } = useRoute();

  useEffect(() => {
    if (searchTerm !== "") {
      setFilteredProducts([]);
      const searchResults = allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchTerm!)
      );
      setFilteredProducts(searchResults);
      setIsFiltered(true);
    } else {
      //TODO: handle if search in category
      // check if params.id and category id
      setIsFiltered(false);
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  const filterProducts = (categoryId: string) => {
    setFilteredProducts([]);
    const categoryProducts: ProductListType[] = allProducts.filter(
      (p: ProductListType) => p.category === categoryId
    );
    setIsFiltered(true);
    setFilteredProducts(categoryProducts);
  };

  const clearCategoryFilter = () => {
    //TODO: clear search terms
    setIsFiltered(false);
    setFilteredProducts([]);
  };

  // Incommning from home page
  useEffect(() => {
    if (params) {
      setFilteredProducts([]);
      const categoryProducts: ProductListType[] = allProducts.filter(
        (p: ProductListType) => p.category === params.id
      );
      setIsFiltered(true);
      setFilteredProducts(categoryProducts);
      setCategoryId(params.id);
    }
  }, [params?.id, allProducts]);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingIndicator size={32} color={colors.ui.primary} />
      ) : (
        <>
          <CategoryMenu
            categoryId={categoryId}
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
