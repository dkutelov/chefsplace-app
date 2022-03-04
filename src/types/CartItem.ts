export interface CartItem {
  id: string;
  item: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
  quantity: number;
}

export interface IProductContext {
  products: [CartItem];
  isLoading: boolean;
  error?: string;
  loadProduct: (productId: string) => void;
}
