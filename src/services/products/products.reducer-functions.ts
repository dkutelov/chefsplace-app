import { IProductsContext, Product } from "../../types/Product";

export const setProducts = (
  state: IProductsContext,
  products: Product[]
): IProductsContext => ({
  ...state,
  products,
});
