import React, { useContext } from "react";

import { SafeArea, ProductList } from "./products.styles";
import { ProductCard } from "../components/product-card.component";
import { ProductsContext } from "../../../services/products/products.context";
import { LoadingIndicator } from "../../../components/loading/loading.component";
import { colors } from "../../../infrastructure/theme/colors";

export const ProductListScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState<String>("");
  const { products, isLoading, error } = useContext(ProductsContext);
  const onChangeSearch = (query: String) => setSearchQuery(query);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingIndicator size={32} color={colors.ui.primary} />
      ) : (
        <ProductList
          data={products}
          renderItem={(item) => <ProductCard item={item.item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeArea>
  );
};
