import { CartItem } from "./Cart";

export interface Order {
  _id?: string;
  orderId?: string;
  orderNumber?: string;
  userId?: string;
  createdAt?: Date;
  items: CartItem[];
  deliveryAddressId: string;
  invoiceAddressId?: string;
  payment: string;
  note?: string;
  deliveryCharge?: number;
}
