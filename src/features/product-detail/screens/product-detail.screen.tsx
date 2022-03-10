import React, { useEffect, useContext, useState } from "react";
import uuid from "react-native-uuid";
import { List } from "react-native-paper";

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
  DescriptionContent,
} from "./product-detail.styles";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { LoadingIndicator } from "../../../components/loading/loading.component";
import { colors } from "../../../infrastructure/theme/colors";
import { QuantitySelector } from "../../../components/quantity-selector/quantity-selector.component";
import { useRoute } from "@react-navigation/native";
import { CartContext } from "../../../services/cart/cart.context";
import { ADD_ITEM_TO_CART } from "../../../services/cart/cart.action-types";

const ProductDetailScreen = () => {
  const { product, isLoading, error, loadProduct } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const { params } = useRoute();
  const { cartItems, dispatch } = useContext(CartContext);
  const [contentExpanded, setContentExpanded] = useState(false);

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
            <Row></Row>
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

            {product.description && product.description.ingredients && (
              <List.Accordion
                title="Съставки"
                left={(props) => <List.Icon {...props} icon="bread-slice" />}
                expanded={contentExpanded}
                onPress={() => setContentExpanded(!contentExpanded)}
              >
                <DescriptionContent>
                  {product.description?.ingredients}
                </DescriptionContent>
              </List.Accordion>
            )}

            <ShortDescription>{product.shortDescription}</ShortDescription>
            <Description>{product.description?.content}</Description>
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
