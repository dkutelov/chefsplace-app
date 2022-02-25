import { useContext } from "react";
import { View, Text } from "react-native";
import React from "react";
import { ProductContextProvider } from "../../../services/product/product.context";
import { ProductContext } from "../../../services/product/product.context";
import { ImageCarousel } from "../components/image-carousel/image-carousel.component";

const ProductDetailScreen = () => {
  const { product, isLoading, error } = useContext(ProductContext);
  return (
    <View>
      <Text>Product Detail Screen</Text>
      {product && <ImageCarousel images={product.images} />}
    </View>
  );
};

export const ProductDetailScreenWrapper = () => (
  <ProductContextProvider>
    <ProductDetailScreen />
  </ProductContextProvider>
);
