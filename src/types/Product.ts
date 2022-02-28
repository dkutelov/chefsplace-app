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
}

export interface IProductsContext {
  products: Product[];
  isLoading: boolean;
  error?: string;
}

export interface IProductContext {
  product?: Product;
  isLoading: boolean;
  error?: string;
  loadProduct: (productId: string) => void;
}
