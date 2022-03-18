import { IWishlistContext } from "../../types/Wishlist";

export const setWishlistItemIds = (
  wishlistState: IWishlistContext,
  wishlistItemIds: string[]
): IWishlistContext => ({
  ...wishlistState,
  wishlistItemIds,
});

export const addItemToWishlist = (
  wishlistState: IWishlistContext,
  productId: string
): IWishlistContext => {
  const wishlistItemIds = [...wishlistState.wishlistItemIds, productId];
  return {
    ...wishlistState,
    wishlistItemIds,
  };
};
export const removeItemFromWishlist = (
  wishlistState: IWishlistContext,
  productId: string
): IWishlistContext => {
  const wishlistItemIds = wishlistState.wishlistItemIds.filter(
    (x) => x !== productId
  );
  return {
    ...wishlistState,
    wishlistItemIds,
  };
};
