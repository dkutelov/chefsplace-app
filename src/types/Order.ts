import { DeliveryAddress } from "./Profile";

export interface OrderItem {
  itemId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Order {
  orderId?: string;
  createdAt: Date;
  items: OrderItem[];
  deliveryAddressId: string;
  invoiceAddressId: string;
  payment: string; //TODO: convert to enum
}
