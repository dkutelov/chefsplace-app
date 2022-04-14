import React, { useContext, useEffect, useState, useRef } from "react";
import { useRoute } from "@react-navigation/native";

// Types & Constants
import { Product } from "../../../types/Product";
import { colors } from "../../../infrastructure/theme/colors";
import { getConfig } from "@infrastructure/api/config";
const config = getConfig();

// Context
import { ProductsContext } from "../../../services/products/products.context";

// Components
import { CategoryMenu } from "../components/category-menu/category-list/category-list.component";
import { ProductList } from "../components/products/product-list/product-list.component";
import { LoadingIndicator } from "../../../components/loading/loading.component";

// Styles
import { SafeArea } from "./products.styles";
import getAllCategories from "@infrastructure/api/categories/get-all-categories";
import { SET_CATEGORIES } from "@services/products/products.action-types";

export const ProductListScreen = () => {
  const { products, isLoading, searchTerm, error, categories, dispatch } =
    useContext(ProductsContext);
  const [allProducts, _] = useState(products);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filteredProducts, setSetFilteredProducts] = useState<Product[]>([]);
  const [errorLoadingCategories, setErrorLoadingCategories] = useState<
    string | null
  >(null);

  const { params } = useRoute();

  //TODO: Custom back icon
  //TODO: Category name

  useEffect(() => {
    if (categories.length === 0) {
      (async () => {
        try {
          const categories = await getAllCategories(config);
          dispatch({ type: SET_CATEGORIES, payload: { categories } });
        } catch (error) {
          setErrorLoadingCategories("Грешка при зареждането на категориите!");
        }
      })();
    }
  }, []);
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
