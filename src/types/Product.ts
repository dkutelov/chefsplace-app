export enum AvailabilityStatus {
  OnStock = 1,
  OutOfStock = 0,
}

export interface Product {
  id: string;
  name: string;
  images: string[];
  price: number;
  reducedPrice?: number;
  shortDescription: string;
  description?: {
    [key: string]: string | { [key: string]: string };
  };
  availabilityStatus: AvailabilityStatus;
  onPromotion?: boolean;
  maxQuantity: number;
  categoryId: string;
}

export interface IProductsContext {
  products: Product[];
  filteredProducts: Product[];
  searchTerm?: string;
  isLoading: boolean;
  error?: string;
  dispatch: React.Dispatch<any>;
}

export interface IProductContext {
  product?: Product;
  isLoading: boolean;
  error?: string;
  loadProduct: (productId: string) => void;
}
