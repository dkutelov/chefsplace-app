import React, { useState, createContext } from "react";
import { Product } from "../../types/Product";

import { productRequest, productTransform } from "./product.service";
import { IProductContext } from "../../types/Product";
import getProductById from "@infrastructure/api/products/get-product-by-id";
import { getConfig } from "@infrastructure/api/config";

const defaultState = {
  product: undefined,
  isLoading: false,
  loadProduct: (id: string) => {},
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

  const config = getConfig();
  const retrieveProduct = async (productId: string) => {
    setIsLoading(true);
    const product = await getProductById(config, productId);
    product.id = product._id;
    setProduct(product);
    setIsLoading(false);
    // productRequest(productId)
    //   .then((data: { [key: string]: any }) => {
    //     return productTransform(data);
    //   })
    //   .then((results) => {
    //     setIsLoading(false);
    //     setProduct(results);
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //     setError(err);
    //   });
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
