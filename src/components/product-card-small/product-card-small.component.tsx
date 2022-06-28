import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

import { AddToCart } from "../add-to-cart-icon/add-to-cart.component";
import { ProductList } from "../../types/Product";

import {
  ProductCardWrapper,
  CardContent,
  ProductImage,
  Title,
  Price,
} from "./product-card-small.styles";
import { K } from "@infrastructure/constants";

const cardWidth = Dimensions.get("window").width / 1.8;

interface Props {
  item: ProductList;
  isSimilarProduct: boolean;
}

export const ProductCardSmall = ({ item, isSimilarProduct }: Props) => {
  const { id, name, mainImage, price, maxQuantity } = item;
  const { navigate } = useNavigation();

  const onProductCardPress = () => {
    if (isSimilarProduct) {
      navigate("SimilarProductDetails", { id, similarProducts: true, name });
    } else {
      navigate("ProductDetails", { id });
      // goes to other route screen, issue with back button
      // navigate("Products", { screen: "ProductDetails", params: { id } });
    }
  };

  return (
    <ProductCardWrapper onPress={onProductCardPress} width={cardWidth}>
      <ProductImage
        key={name}
        source={{ uri: K.imageBaseUrl + mainImage }}
        resizeMode="contain"
      />
      <Title numberOfLines={2}>{name}</Title>
      <CardContent>
        <Price>{(price / 100).toFixed(2)} лв.</Price>
        <AddToCart
          disabled={false}
          cartItem={{
            id,
            name,
            image: mainImage,
            price,
            maxQuantity,
            quantity: 1,
          }}
          size={20}
        />
      </CardContent>
    </ProductCardWrapper>
  );
};
