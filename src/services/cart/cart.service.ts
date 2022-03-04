import { CartItem } from "../../types/Cart";
import data from "./mock/cart.json";

export const cartTransform = (
  cartData: { [key: string]: any }[]
): CartItem[] => {
  return cartData.map<CartItem>((cartItem: any) => ({
    id: cartItem.id,
    item: cartItem.item,
    quantity: cartItem.quantity,
  }));
};

export const cartRequest = () => {
  return new Promise<{ [key: string]: any }[]>((resolve, reject) => {
    const mock = data;
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
