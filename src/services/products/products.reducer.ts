import { IProductsContext } from "../../types/Product";
import {
  SET_PRODUCTS,
  SET_SEARCH_TERM,
  RESET_SEARCH_TERM,
  SET_CATEGORIES,
  ERROR_FETCH_CATEGORIES,
} from "./products.action-types";
import { setProducts, setCategories } from "./products.reducer-functions";

interface IProps {
  type: string;
  payload: any;
}

export const productsReducer = (state: IProductsContext, props: IProps) => {
  const { type, payload } = props;
  switch (type) {
    case SET_PRODUCTS:
      return setProducts(state, payload.products);
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: payload.searchTerm };
    case RESET_SEARCH_TERM:
      return { ...state, searchTerm: "" };
    case SET_CATEGORIES:
      return setCategories(state, payload.categories);
    case ERROR_FETCH_CATEGORIES:
      return { ...state, error: "Няма връзка със сървъра!" };
    default:
      return state;
  }
};
