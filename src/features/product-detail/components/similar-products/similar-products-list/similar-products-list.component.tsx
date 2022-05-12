import React, { useContext, useEffect, useState } from "react";

import { ProductsContext } from "@services/products/products.context";
import { ProductList } from "@types/Product";
import { K } from "@infrastructure/constants";
import {
  Container,
  Title,
  SimilarProductsContainer,
} from "./similar-products.styles";
import { ProductCardSmall } from "@components/product-card-small/product-card-small.component";

interface IProps {
  categoryId: string;
  currentProductId: string;
}

export const SimilarProducts = ({ categoryId, currentProductId }: IProps) => {
  const { products } = useContext(ProductsContext);
  const [similarProducts, setSimilarProducts] = useState<ProductList[]>([]);

  useEffect(() => {
    let similarProducts: ProductList[] = [];
    const categoryProductsUnshaffled = products.filter(
      (p) => p.id !== currentProductId && p.category === categoryId
    );

    const categoryProducts = categoryProductsUnshaffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    if (categoryProducts.length) {
      for (let index = 0; index < categoryProducts.length; index++) {
        similarProducts.push(categoryProducts[index]);

        if (similarProducts.length >= K.similarProductCount) {
          break;
        }
      }

      setSimilarProducts(similarProducts);
    }
  }, [products]);

  return (
    <>
      {similarProducts.length > 0 && (
        <Container>
          <Title>Подобни Продукти</Title>
          <SimilarProductsContainer
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {similarProducts.map((product) => (
              <ProductCardSmall
                item={product}
                key={product.id}
                isSimilarProduct={true}
              />
            ))}
          </SimilarProductsContainer>
        </Container>
      )}
    </>
  );
};
