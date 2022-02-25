import React from "react";
import { useContext } from "react";

import { ProductContextProvider } from "../../../services/product/product.context";
import { ProductContext } from "../../../services/product/product.context";
import { ImageCarousel } from "../components/image-carousel/image-carousel.component";
import { ProductScrollView, Title } from "./product-detail.styles";
import { SafeArea } from "../../../components/utils/safe-area.component";

const ProductDetailScreen = () => {
  const { product, isLoading, error } = useContext(ProductContext);
  return (
    <SafeArea>
      <ProductScrollView>
        <Title>{product?.name}</Title>
        {product && <ImageCarousel images={product.images} />}
      </ProductScrollView>
    </SafeArea>
  );
};

export const ProductDetailScreenWrapper = () => (
  <ProductContextProvider>
    <ProductDetailScreen />
  </ProductContextProvider>
);
