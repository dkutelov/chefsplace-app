import { DeliveryAddress, InvoiceAddress } from "./Profile";

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  maxQuantity?: number;
  quantity: number;
  weight: number;
}

export interface ICartContext {
  cartItems: CartItem[];
  guestDeliveryAddressId?: DeliveryAddress;
  guestInvoiceAddressId?: InvoiceAddress;
  isLoading: boolean;
  error?: string;
  dispatch: React.Dispatch<any>;
}
