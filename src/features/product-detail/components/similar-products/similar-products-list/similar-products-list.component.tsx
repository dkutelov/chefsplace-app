import React, { useContext, useEffect, useState } from "react";

import { ProductsContext } from "../../../../../services/products/products.context";
import { Product } from "../../../../../types/Product";
import { K } from "../../../../../infrastructure/constants";
import {
  Container,
  Title,
  SimilarProductsContainer,
} from "./similar-products.styles";
import { ProductCardSmall } from "../../../../../components/product-card-smal/product-card-small.component";

interface IProps {
  categoryId: string;
}

export const SimilarProducts = ({ categoryId }: IProps) => {
  const { products } = useContext(ProductsContext);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  useEffect(() => {
    let similarProducts: Product[] = [];

    if (products.length) {
      for (let index = 0; index < products.length; index++) {
        if (products[index].categoryId === categoryId) {
          similarProducts.push(products[index]);
        }

        if (similarProducts.length >= K.similarProductCount) {
          break;
        }
      }

      setSimilarProducts(similarProducts);
    }
  }, [products]);

  return (
    <Container>
      <Title>Подобни Продукти</Title>
      <SimilarProductsContainer>
        {similarProducts.map((product) => (
          <ProductCardSmall item={product} key={product.id} />
        ))}
      </SimilarProductsContainer>
    </Container>
  );
};
