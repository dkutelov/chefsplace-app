import React, { createContext, useContext, useReducer } from "react";

import { IProductsContext } from "../../types/Product";
import { productsReducer } from "./products.reducer";

const defaultState: IProductsContext = {
  products: [],
  filteredProducts: [],
  categories: [],
  searchTerm: "",
  isLoading: false,
};

export const ProductsContext = createContext(defaultState);

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialProducts = useContext(ProductsContext);
  const [state, dispatch] = useReducer(productsReducer, initialProducts);
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
