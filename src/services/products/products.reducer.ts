import { IProductsContext } from "../../types/Product";
import { SET_PRODUCTS } from "./products.action-tipes";
import { setProducts } from "./products.reducer-functions";

interface IProps {
  type: string;
  payload: any;
}

export const productsReducer = (state: IProductsContext, props: IProps) => {
  const { type, payload } = props;
  switch (type) {
    case SET_PRODUCTS:
      return setProducts(state, payload.products);
    default:
      return state;
  }
};
