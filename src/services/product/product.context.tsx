import React, { useState, createContext } from "react";
import { Product } from "../../types/Product";

import { productRequest, productTransform } from "./product.service";
import { IProductContext } from "../../types/Product";

const defaultState = {
  product: undefined,
  isLoading: false,
  loadProduct: () => {},
};

export const ProductContext = createContext<IProductContext>(defaultState);

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const retrieveProduct = (productId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      productRequest(productId)
        .then((data: { [key: string]: any }) => {
          return productTransform(data);
        })
        .then((results) => {
          setIsLoading(false);
          setProduct(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 500);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        isLoading,
        error,
        loadProduct: retrieveProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
