import { WishlistItem } from "../../types/Wishlist";
import data from "./mock/wishlist.json";

export const wishlistTransform = (
  results: { [key: string]: any }[]
): WishlistItem[] => {
  return results.map<WishlistItem>((r: any) => ({
    id: r.id,
    name: r.name,
    image: r.image,
    price: r.price,
    available: true,
  }));
};

export const wishlistRequest = () => {
  return new Promise<{ [key: string]: any }[]>((resolve, reject) => {
    const mock = data;
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
