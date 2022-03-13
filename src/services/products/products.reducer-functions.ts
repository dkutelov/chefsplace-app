import { IProductsContext, Product } from "../../types/Product";

export const setProducts = (
  state: IProductsContext,
  products: Product[]
): IProductsContext => ({
  ...state,
  products,
  filteredProducts: products,
});

export const filterProductsBySearchTerm = (
  state: IProductsContext,
  searchTerm?: string
): IProductsContext => ({
  ...state,
  filteredProducts: state.products.filter((p) => {
    console.log(searchTerm);

    if (!searchTerm) {
      return true;
    } else {
      return (
        p.name.toLowerCase().includes(searchTerm) ||
        p.shortDescription.toLowerCase().includes(searchTerm)
      );
    }
  }),
});

export const filterProductsByCategory = (
  state: IProductsContext,
  categoryId: string
): IProductsContext => {
  console.log(
    state.products.filter((p: Product) => {
      console.log(p);
      console.log(categoryId);
      return p.categoryId == categoryId;
    })
  );

  return {
    ...state,
    filteredProducts: state.products.filter(
      (p: Product) => p.categoryId == categoryId
    ),
  };
};

export const resetFilteredProducts = (
  state: IProductsContext
): IProductsContext => ({
  ...state,
  filteredProducts: state.products,
});
