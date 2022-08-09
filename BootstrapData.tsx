import getAllCategories from "@infrastructure/api/categories/get-all-categories";
import { ProductsContext } from "@services";
import {
  SET_CATEGORIES,
  ERROR_FETCH_CATEGORIES,
  SET_PRODUCTS,
} from "@services/products/products.action-types";
import React, { useEffect, useContext } from "react";
import { getConfig } from "@infrastructure/api/config";
import getAllProducts from "@infrastructure/api/products/get-all-products";

const BootstrapData = ({ children }: { children: React.ReactNode }) => {
  const config = getConfig();
  const { products, categories, isLoading, dispatch } =
    useContext(ProductsContext);

  useEffect(() => {
    if (categories.length === 0) {
      (async () => {
        try {
          const categories = await getAllCategories(config);
          dispatch({ type: SET_CATEGORIES, payload: { categories } });
        } catch (error) {
          dispatch({ type: ERROR_FETCH_CATEGORIES });
          console.log(error);
        }
      })();
    }
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      (async () => {
        try {
          const products = await getAllProducts(config);
          dispatch({ type: SET_PRODUCTS, payload: { products } });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);
  return <>{children}</>;
};

export default BootstrapData;
