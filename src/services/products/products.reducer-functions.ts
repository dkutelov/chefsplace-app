import { Category, IProductsContext, ProductList } from "../../types/Product";

export const setProducts = (
  state: IProductsContext,
  products: ProductList[]
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
