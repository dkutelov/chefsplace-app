import React, { useEffect, useContext, useState } from "react";
import uuid from "react-native-uuid";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { ProductContextProvider } from "../../../services/product/product.context";
import { ProductContext } from "../../../services/product/product.context";
import { CartContext } from "../../../services/cart/cart.context";
import { ADD_ITEM_TO_CART } from "../../../services/cart/cart.action-types";

import { ImageCarousel } from "../components/image-carousel/image-carousel.component";
import { QuantitySelector } from "../../../components/quantity-selector/quantity-selector.component";
import { DescriptionAccordion } from "../components/description-accordion/description-accordion.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { LoadingIndicator } from "../../../components/loading/loading.component";

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

import { colors } from "../../../infrastructure/theme/colors";

const ProductDetailScreen = () => {
  const { product, isLoading, error, loadProduct } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const { params } = useRoute();
  const { cartItems, dispatch } = useContext(CartContext);

  useEffect(() => {
    //TODO: if no id redirect to products and show notification "Product does not exists"

    //TODO: Handle error in product is not returned from servive
    if (params && params.id) {
      loadProduct(params.id);
    }
  }, []);

  const hasNotEnoughStock = () => {
    if (!product) {
      return false;
    } else {
      return quantity > product.maxQuantity;
    }
  };

  const addProductToCart = () => {
    //TODO: Availability status not converted
    if (!product || hasNotEnoughStock() || product.availabilityStatus !== 1) {
      return;
    }
    const { id, name, price } = product;

    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        id: uuid.v4(),
        item: {
          id,
          name,
          image: product.images[0],
          price,
          maxQuantity: product?.maxQuantity,
        },
        quantity,
      },
    });
  };

  return (
    <SafeArea>
      <ProductScrollView>
        {isLoading && <LoadingIndicator size={32} color={colors.ui.primary} />}
        {product && (
          <>
            <Title>{product?.name}</Title>
            <ImageCarousel images={product.images} />
            <Row>
              <ActionRow>
                <PriceInnerWrapper>
                  <Price>{product.price / 100}лв</Price>
                  <PriceDescriptior>без ДДС</PriceDescriptior>
                </PriceInnerWrapper>
                <QuantitySelector
                  quantity={quantity}
                  setQuantity={setQuantity}
                  maxQuantity={product.maxQuantity}
                />
                <RoundIcon>
                  <Ionicons
                    onPress={addProductToCart}
                    name="cart"
                    size={40}
                    color="white"
                  />
                </RoundIcon>
              </ActionRow>
              {hasNotEnoughStock() && (
                <NotEnoughQuantityNotifivation>
                  Недостатъчна наличност.
                </NotEnoughQuantityNotifivation>
              )}
            </Row>
            <Row>
              <ShortDescription>{product.shortDescription}</ShortDescription>
            </Row>
            <Description>{product.description?.content}</Description>
            <Row>
              {product.description && (
                <DescriptionAccordion description={product.description} />
              )}
            </Row>
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
