import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useReducer,
} from "react";

import { Product } from "../../types/Product";
import { SET_PRODUCTS } from "./products.action-tipes";
import { productsRequest, productsTransform } from "./products.service";
import { IProductsContext } from "../../types/Product";
import { productsReducer } from "./products.reducer";

const defaultState: IProductsContext = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  dispatch: () => {},
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

  const initialProducts = useContext(ProductsContext);
  const [state, dispatch] = useReducer(productsReducer, initialProducts);
  console.log("cart state", state);

  const retrieveProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      productsRequest()
        .then((data: { [key: string]: any }[]) => {
          return productsTransform(data);
        })
        .then((results) => {
          setIsLoading(false);
          dispatch({ type: SET_PRODUCTS, payload: { products: results } });
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
        ...state,
        dispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
