import { CartItem } from "../../types/Cart";
import data from "./mock/cart.json";

export const cartTransform = (
  cartData: { [key: string]: any }[]
): CartItem[] => {
  return cartData.map<CartItem>((cartItem: any) => ({
    id: cartItem.id,
    name: cartItem.name,
    price: cartItem.price,
    image: cartItem.image,
    quantity: cartItem.quantity,
    maxQuantity: cartItem.maxQuantity,
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
