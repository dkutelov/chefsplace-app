import React, {
  useState,
  createContext,
  useEffect,
  ReactChildren,
} from "react";
import { Product } from "../../types/Product";

import { productsRequest, productsTransform } from "./products.service";
import { IProductsContext } from "../../types/Product";

const defaultState = {
  products: [],
  isLoading: false,
};

export const ProductsContext = createContext<IProductsContext>(defaultState);

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const retrieveProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      productsRequest()
        .then((data: { [key: string]: any }[]) => {
          return productsTransform(data);
        })
        .then((results) => {
          setIsLoading(false);
          setProducts(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 500);
  };

  useEffect(() => {
    retrieveProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
