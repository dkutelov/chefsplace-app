import React from "react";
import { Product } from "../../../../../types/Product";
import { ProductCard } from "../product-card/product-card.component";
import { ProductFlatList, NoProductsMessage } from "./product-list.styles";

interface IProps {
  products: Product[];
}

export const ProductList = ({ products = [] }: IProps) => {
  return (
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
};
