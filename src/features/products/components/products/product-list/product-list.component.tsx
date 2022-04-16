import React from "react";
import { ProductList as ProductListType } from "@types/Product";
import { ProductCard } from "../product-card/product-card.component";
import { ProductFlatList, NoProductsMessage } from "./product-list.styles";

interface IProps {
  products: ProductListType[];
}

export const ProductList = ({ products = [] }: IProps) => (
  <>
    {products.length == 0 ? (
      <NoProductsMessage>Няма продукти</NoProductsMessage>
    ) : (
      <ProductFlatList
        data={products}
        renderItem={(item) => <ProductCard item={item.item} />}
        showsVerticalScrollIndicator={false}
      />
    )}
  </>
);
