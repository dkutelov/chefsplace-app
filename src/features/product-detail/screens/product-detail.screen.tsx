import React, { useEffect, useContext, useState } from "react";

import { ProductContextProvider } from "../../../services/product/product.context";
import { ProductContext } from "../../../services/product/product.context";
import { ImageCarousel } from "../components/image-carousel/image-carousel.component";
import {
  ProductScrollView,
  Title,
  ShortDescription,
  Description,
  PriceInnerWrapper,
  PriceDescriptior,
  Price,
  Row,
  RoundIcon,
  ActionRow,
  NotEnoughQuantityNotifivation,
} from "./product-detail.styles";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { LoadingIndicator } from "../../../components/loading/loading.component";
import { colors } from "../../../infrastructure/theme/colors";
import { QuantitySelector } from "../../../components/quantity-selector/quantity-selector.component";

const ProductDetailScreen = () => {
  const { product, isLoading, error, loadProduct } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const id = "2";

  useEffect(() => {
    loadProduct(id);
  }, []);

  const hasNotEnoughStock = () => {
    if (!product) {
      return false;
    } else {
      return quantity > product.maxQuantity;
    }
  };

  const addProductToCart = () => {
    if (hasNotEnoughStock()) {
      return;
    }

    console.warn("Add to cart");
  };

  return (
    <SafeArea>
      <ProductScrollView>
        {isLoading && <LoadingIndicator size={32} color={colors.ui.primary} />}
        {product && (
          <>
            <Title>{product?.name}</Title>
            <ImageCarousel images={product.images} />
            <Row></Row>
            <ActionRow>
              <PriceInnerWrapper>
                <Price>{product.price / 100}лв</Price>
                <PriceDescriptior>без ДДС</PriceDescriptior>
              </PriceInnerWrapper>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
              <RoundIcon>
                <Ionicons
                  onPress={addProductToCart}
                  name="cart"
                  size={40}
                  color="white"
                />
              </RoundIcon>
            </ActionRow>
            <NotEnoughQuantityNotifivation
              type="error"
              visible={hasNotEnoughStock()}
            >
              Недостатъчна наличност.
            </NotEnoughQuantityNotifivation>
            <ShortDescription>{product.shortDescription}</ShortDescription>
            <Description>{product.description}</Description>
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
