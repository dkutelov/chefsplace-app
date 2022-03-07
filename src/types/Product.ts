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
  description?: string;
  availabilityStatus: AvailabilityStatus;
  onPromotion?: boolean;
  maxQuantity: number;
}

export interface IProductsContext {
  products: Product[];
  filteredProducts: Product[];
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
