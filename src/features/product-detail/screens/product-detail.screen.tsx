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
  PriceRow,
  PriceInnerWrapper,
  PriceDescriptior,
  Price,
  PriceWith,
  Row,
  RoundIcon,
  ActionRow,
  NotEnoughQuantityNotifivation,
  WishlistAndPriceRow,
} from "./product-detail.styles";

import { colors } from "../../../infrastructure/theme/colors";
import { SimilarProducts } from "../components/similar-products/similar-products-list/similar-products-list.component";
import { WishlistIcon } from "../../../components/wishlist-icon/wishlist-icon.component";
import { WishlistContext } from "../../../services/wishlist/wishlist.context";
import {
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
} from "../../../services/wishlist/wishlist.action-types";

const ProductDetailScreen = () => {
  const { product, isLoading, error, loadProduct } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const { params } = useRoute();
  const { cartItems, dispatch } = useContext(CartContext);
  const { wishlistItemIds, dispatch: wishlistDispatch } =
    useContext(WishlistContext);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  useEffect(() => {
    //TODO: if no id redirect to products and show notification "Product does not exists"

    //TODO: Handle error in product is not returned from servive

    // Create Reducer - ???
    // Load related products

    if (params && params.id) {
      loadProduct(params.id);
      setIsWishlisted(wishlistItemIds.includes(params.id));
    }
  }, []);

  const hasNotEnoughStock = () => {
    if (!product) {
      return false;
    } else {
      return quantity === product.maxQuantity;
    }
  };

  const addProductToCart = () => {
    //TODO: Availability status not converted
    if (!product || product.availabilityStatus !== 1) {
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

  const toggleWishlisted = () => {
    if (product) {
      if (isWishlisted) {
        setIsWishlisted(false);
        wishlistDispatch({
          type: REMOVE_ITEM_FROM_WISHLIST,
          payload: {
            productId: product.id,
          },
        });
        setIsWishlisted(false);
      } else {
        wishlistDispatch({
          type: ADD_ITEM_TO_WISHLIST,
          payload: {
            productId: product.id,
          },
        });
        setIsWishlisted(true);
      }
    }
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
              <WishlistAndPriceRow>
                <WishlistIcon
                  isWishlisted={isWishlisted}
                  toggleWishlisted={toggleWishlisted}
                />
                <PriceRow>
                  <PriceInnerWrapper>
                    <Price>{(product.price / 100).toFixed(2)}лв</Price>
                    <PriceDescriptior>без ДДС</PriceDescriptior>
                  </PriceInnerWrapper>
                  <PriceWith>
                    {Math.floor(product.price * 1.2) / 100}лв с ДДС
                  </PriceWith>
                </PriceRow>
              </WishlistAndPriceRow>
              <ActionRow>
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
                  Максимално количество {product.maxQuantity}.
                </NotEnoughQuantityNotifivation>
              )}
            </Row>
            <Row>
              <ShortDescription>{product.shortDescription}</ShortDescription>
            </Row>
            <Row>
              <Description>{product.description?.content}</Description>
            </Row>
            <Row>
              {product.description && (
                <DescriptionAccordion description={product.description} />
              )}
            </Row>
            <Row>
              <SimilarProducts category="сос" />
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
