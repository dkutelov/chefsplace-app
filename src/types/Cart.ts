export interface CartItem {
  id: string;
  item: {
    id: string;
    name: string;
    image: string;
    price: number;
    maxQuantity: number;
  };
  quantity: number;
}

export interface ICartContext {
  cartItems: CartItem[];
  isLoading: boolean;
  error?: string;
  dispatch: React.Dispatch<any>;
}
