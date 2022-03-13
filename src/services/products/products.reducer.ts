import { IProductsContext } from "../../types/Product";
import {
  SET_PRODUCTS,
  FILTER_PRODUCTS_BY_KEYWORD,
  RESET_FILTERED_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
} from "./products.action-types";
import {
  setProducts,
  filterProductsBySearchTerm,
  filterProductsByCategory,
  resetFilteredProducts,
} from "./products.reducer-functions";

interface IProps {
  type: string;
  payload: any;
}

export const productsReducer = (state: IProductsContext, props: IProps) => {
  const { type, payload } = props;
  switch (type) {
    case SET_PRODUCTS:
      return setProducts(state, payload.products);
    case FILTER_PRODUCTS_BY_KEYWORD:
      return filterProductsBySearchTerm(state, payload.searchTerm);
    case FILTER_PRODUCTS_BY_CATEGORY:
      return filterProductsByCategory(state, payload.categoryId);
    case RESET_FILTERED_PRODUCTS:
      return resetFilteredProducts(state);
    default:
      return state;
  }
};
