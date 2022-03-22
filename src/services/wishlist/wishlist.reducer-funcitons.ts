import { Product } from "../../types/Product";
import { IWishlistContext, WishlistItem } from "../../types/Wishlist";

export const setWishlistItems = (
  wishlistState: IWishlistContext,
  wishlistItems: WishlistItem[]
): IWishlistContext => ({
  ...wishlistState,
  wishlistItems,
});

export const addItemToWishlist = (
  wishlistState: IWishlistContext,
  wishlistItem: WishlistItem
): IWishlistContext => {
  return {
    ...wishlistState,
    wishlistItems: [...wishlistState.wishlistItems, wishlistItem],
  };
};
export const removeItemFromWishlist = (
  wishlistState: IWishlistContext,
  productId: string
): IWishlistContext => {
  const wishlistItems = wishlistState.wishlistItems.filter(
    (x) => x.id !== productId
  );
  return {
    ...wishlistState,
    wishlistItems,
  };
};

export const updateWishlistItemsAvalability = (
  wishlistState: IWishlistContext,
  products: Product[]
): IWishlistContext => {
  const wishlistItems = wishlistState.wishlistItems;

  const updatedWishlistItems = wishlistState.wishlistItems.map(
    (item: WishlistItem) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) {
        item.available = false;
      }

      return item;
    }
  );

  return {
    ...wishlistState,
    wishlistItems: updatedWishlistItems,
  };
};
