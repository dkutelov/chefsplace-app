import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { ProductCard } from "../components/product-card.component";
import { Product, AvailabilityStatus } from "../../../types/Product";

const ProductList = styled.View`
  flex: 1;
  background-color: white;
  padding: 18px};
`;

const product: Product = {
  name: "SUNSHINE CHILI ПИКАНТЕН СОС С ЧИЛИ И ЧЕСЪН 1 Л",
  images: [
    "http://chefsplace.bg/261-tm_thickbox_default/sunshine-chili-pikanten-sos-s-chili-i-chesn-1-l.jpg",
  ],
  price: 1952,
  shortDescription:
    "Knorr автентична азиатска серия от продукти, за директна употреба и приложения за ястиия на уок, месо, нудълс и други. Пикантен сос с чили и чесън.",
  availabilityStatus: AvailabilityStatus.OnStock,
};

export const ProductListScreen = () => {
  return (
    <ProductList>
      <ProductCard product={product} />
    </ProductList>
  );
};
