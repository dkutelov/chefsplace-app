import React from "react";
import { ProductList as ProductListType } from "../../../../../types/Product";
import ProductCard from "../product-card/product-card.component";
import { ProductFlatList, NoProductsMessage } from "./product-list.styles";

interface IProps {
  products: ProductListType[];
}

export const ProductList = ({ products = [] }: IProps) => {
  const renderItem = ({ item }: { item: ProductListType }) => (
    <ProductCard
      id={item.id}
      name={item.name}
      mainImage={item.mainImage}
      price={item.price}
      maxQuantity={item.maxQuantity}
      weight={item.weight}
    />
  );
  return (
    <>
      {products.length == 0 ? (
        <NoProductsMessage>Няма продукти</NoProductsMessage>
      ) : (
        <ProductFlatList
          removeClippedSubviews
          initialNumToRender={10}
          data={products}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: ProductListType) => item.id}
        />
      )}
    </>
  );
};
