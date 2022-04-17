export enum AvailabilityStatus {
  OnStock = 1,
  OutOfStock = 0,
}

export interface Product {
  id: string;
  _id?: string;
  name: string;
  images: string[];
  price: number;
  reducedPrice?: number;
  shortDescription: string;
  description?: {
    [key: string]: string | { [key: string]: string };
  };
  onPromotion?: boolean;
  maxQuantity: number;
  categoryId: string;
}

export interface ProductConnection {
  id: string;
  name: string;
  mainImage: string;
  price: number;
  reducedPrice?: number;
  onPromotion?: boolean;
  maxQuantity: number;
  category: string;
}

export interface ProductList {
  id: string;
  name: string;
  mainImage: string;
  price: number;
  reducedPrice?: number;
  onPromotion?: boolean;
  maxQuantity: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

export interface CategoryConnection {
  _id: string;
  name: string;
  imageUrl: string;
  position: number;
}

export interface IProductsContext {
  products: ProductList[];
  filteredProducts: ProductList[];
  categories: Category[];
  searchTerm?: string;
  isLoading: boolean;
  isCategoryLoading?: boolean;
  error?: string;
  dispatch: (props: any) => void;
}

export interface IProductContext {
  product?: Product;
  isLoading: boolean;
  error?: string;
  loadProduct: (productId: string) => void;
}
