import React, { useEffect, useContext, useState, useCallback } from "react";
import { useRoute } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

// Types & Constants
import { colors } from "../../../infrastructure/theme/colors";

// Context
import { ProductContextProvider } from "../../../services/product/product.context";
import { ProductContext } from "../../../services/product/product.context";
import { WishlistContext } from "../../../services/wishlist/wishlist.context";
import {
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
} from "../../../services/wishlist/wishlist.action-types";

// Components
import { SafeArea } from "../../../components/utils/safe-area.component";
import { LoadingIndicator } from "../../../components/loading/loading.component";
import { ImageCarousel } from "../components/image-carousel/image-carousel.component";
import { QuantitySelector } from "../../../components/quantity-selector/quantity-selector.component";
import { DescriptionAccordion } from "../components/description-accordion/description-accordion.component";
import { SimilarProducts } from "../components/similar-products/similar-products-list/similar-products-list.component";
import { WishlistIcon } from "../../../components/wishlist-icon/wishlist-icon.component";
import { AddToCart } from "../../../components/add-to-cart-icon/add-to-cart.component";

// Styles
import {
  ProductScrollView,
  Title,
  ShortDescription,
  Description,
  PriceRow,
  Price,
  PriceWith,
  Row,
  ActionRow,
  NotEnoughQuantityNotifivation,
  CTARow,
} from "./product-detail.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

const ProductDetailScreen = () => {
  const { product, isLoading, error, loadProduct } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const { params } = useRoute();
  const { wishlistItems, dispatch: wishlistDispatch } =
    useContext(WishlistContext);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  useEffect(() => {
    //TODO: if no id redirect to products and show notification "Product does not exists"

    //TODO: Handle error in product is not returned from servive

    // Create Reducer?

    if (params && params.id) {
      loadProduct(params.id);
      setIsWishlisted(!!wishlistItems.find((x) => x.id === params.id));
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      setQuantity(1);
    }, [])
  );

  const hasNotEnoughStock = () => {
    if (!product) {
      return false;
    } else {
      return quantity === product.maxQuantity;
    }
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
        const wishlistItem = {
          id: product.id,
          name: product.name,
          image: product.images[0],
          price: product.price,
        };
        wishlistDispatch({
          type: ADD_ITEM_TO_WISHLIST,
          payload: {
            wishlistItem,
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
            <Title>{product.name}</Title>
            <ImageCarousel images={product.images} />
            <PriceRow>
              <Price>{(product.price / 100).toFixed(2)} лв. </Price>
              <PriceWith>
                {Math.floor(product.price * 1.2) / 100} лв. с ДДС
              </PriceWith>
            </PriceRow>
            <CTARow>
              <WishlistIcon
                isWishlisted={isWishlisted}
                toggleWishlisted={toggleWishlisted}
              />
              <ActionRow>
                <Spacer position="right" size="large">
                  <QuantitySelector
                    quantity={quantity}
                    setQuantity={setQuantity}
                    maxQuantity={product.maxQuantity}
                  />
                </Spacer>
                <AddToCart
                  cartItem={{
                    id: product.id,
                    name: product.name,
                    image: product.images[0],
                    price: product.price,
                    maxQuantity: product.maxQuantity,
                    quantity,
                  }}
                  size={45}
                />
              </ActionRow>
              {hasNotEnoughStock() && (
                <NotEnoughQuantityNotifivation>
                  Максимално количество {product.maxQuantity}.
                </NotEnoughQuantityNotifivation>
              )}
            </CTARow>
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
              <SimilarProducts categoryId={product.categoryId} />
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
