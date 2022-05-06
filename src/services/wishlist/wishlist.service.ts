import { WishlistItem } from "../../types/Wishlist";

//TODO: Check if items not in products are removed

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
