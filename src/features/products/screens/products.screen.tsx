import React, { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import { SafeArea, ProductList } from "./products.styles";
import { ProductCard } from "../components/product-card.component";
import { ProductsContext } from "../../../services/products/products.context";
import { LoadingIndicator } from "../../../components/loading/loading.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Product } from "../../../types/Product";
import { CategoryMenu } from "../components/category-menu/category-list/category-list.component";

export const ProductListScreen = () => {
  const { products, isLoading, searchTerm, error, dispatch } =
    useContext(ProductsContext);
  const [renderProducts, setRenderProducts] = useState(products);
  const [filteredProducts, setSetFilteredProducts] = useState<Product[]>([]);
  const { params } = useRoute();

  //TODO: No Products to show
  //TODO: Custom back icon
  //TODO: Category name
  // Horizontal Scroll Category Menu

  useEffect(() => {
    if (searchTerm !== "") {
      setSetFilteredProducts(
        renderProducts.filter(
          (p) =>
            p.name.toLowerCase().includes(searchTerm!) ||
            p.shortDescription.toLowerCase().includes(searchTerm!)
        )
      );
    } else {
      setSetFilteredProducts([]);
    }
  }, [searchTerm]);

  const filterProducts = (categoryId: string) => {
    setSetFilteredProducts([]);
    const categoryProducts: Product[] = renderProducts.filter(
      (p: Product) => p.categoryId === categoryId
    );
    console.log(categoryProducts);
    setSetFilteredProducts(categoryProducts);
  };

  useEffect(() => {
    if (params) {
      const categoryProducts: Product[] = renderProducts.filter(
        (p: Product) => p.categoryId === params.id
      );
      setSetFilteredProducts(categoryProducts);
    }
  }, [params?.id, renderProducts]);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingIndicator size={32} color={colors.ui.primary} />
      ) : (
        <>
          <CategoryMenu filterProducts={filterProducts} />
          <ProductList
            data={
              filteredProducts.length === 0 ? renderProducts : filteredProducts
            }
            renderItem={(item) => <ProductCard item={item.item} />}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </SafeArea>
  );
};
