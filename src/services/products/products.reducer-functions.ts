import { Category, IProductsContext, Product } from "../../types/Product";

export const setProducts = (
  state: IProductsContext,
  products: Product[]
): IProductsContext => ({
  ...state,
  products,
  filteredProducts: products,
});

export const setCategories = (
  state: IProductsContext,
  categories: Category[]
): IProductsContext => ({
  ...state,
  categories,
});
