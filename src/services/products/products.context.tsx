import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useReducer,
} from "react";

import { SET_PRODUCTS } from "./products.action-types";
import { productsRequest, productsTransform } from "./products.service";
import { IProductsContext } from "../../types/Product";
import { productsReducer } from "./products.reducer";

const defaultState: IProductsContext = {
  products: [],
  filteredProducts: [],
  searchTerm: "",
  isLoading: false,
  dispatch: () => {},
};

export const ProductsContext = createContext<IProductsContext>(defaultState);

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const initialProducts = useContext(ProductsContext);
  const [state, dispatch] = useReducer(productsReducer, initialProducts);

  const retrieveProducts = () => {
    setIsLoading(true);

    productsRequest()
      .then((data: { [key: string]: any }[]) => {
        return productsTransform(data);
      })
      .then((results) => {
        console.log({ results });
        setIsLoading(false);
        dispatch({ type: SET_PRODUCTS, payload: { products: results } });
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    retrieveProducts();
  }, []);

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
