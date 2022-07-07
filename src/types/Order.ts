import { CartItem } from "./Cart";

export interface Order {
  _id?: string;
  orderId?: string;
  userId?: string;
  createdAt?: Date;
  items: CartItem[];
  deliveryAddressId: string;
  invoiceAddressId?: string;
  payment: string; //TODO: convert to enum
  note?: string;
}
