import { IProductsContext, Product } from "../../types/Product";

export const setProducts = (
  state: IProductsContext,
  products: Product[]
): IProductsContext => ({
  ...state,
  products,
});

export const filterProductsBySearchTerm = (
  state: IProductsContext,
  searchTerm: string
): IProductsContext => ({
  ...state,
  filteredProducts: state.products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.shortDescription.toLowerCase().includes(searchTerm)
  ),
});

export const resetFilteredProducts = (
  state: IProductsContext
): IProductsContext => ({
  ...state,
  filteredProducts: [],
});
