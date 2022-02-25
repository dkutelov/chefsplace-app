import React, { useState, createContext, useEffect } from "react";
import { Product } from "../../types/Product";

import { productRequest, productTransform } from "./product.service";
import { IProductContext } from "../../types/Product";

const defaultState = {
  product: undefined,
  isLoading: false,
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

  const retrieveProduct = () => {
    setIsLoading(true);
    setTimeout(() => {
      productRequest()
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
    }, 2000);
  };

  useEffect(() => {
    retrieveProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        product,
        isLoading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
