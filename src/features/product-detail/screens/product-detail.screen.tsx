import React, { useEffect, useContext } from "react";

import { ProductContextProvider } from "../../../services/product/product.context";
import { ProductContext } from "../../../services/product/product.context";
import { ImageCarousel } from "../components/image-carousel/image-carousel.component";
import { ProductScrollView, Title } from "./product-detail.styles";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { LoadingIndicator } from "../../../components/loading/loading.component";
import { colors } from "../../../infrastructure/theme/colors";

const ProductDetailScreen = () => {
  const { product, isLoading, error, loadProduct } = useContext(ProductContext);
  const id = "2";

  useEffect(() => {
    loadProduct(id);
  }, []);

  return (
    <SafeArea>
      <ProductScrollView>
        {isLoading && <LoadingIndicator size={32} color={colors.ui.primary} />}
        {product && (
          <>
            <Title>{product?.name}</Title>
            <ImageCarousel images={product.images} />
          </>
        )}
      </ProductScrollView>
    </SafeArea>
  );
};

export const ProductDetailScreenWrapper = () => (
  <ProductContextProvider>
    <ProductDetailScreen />
  </ProductContextProvider>
);
