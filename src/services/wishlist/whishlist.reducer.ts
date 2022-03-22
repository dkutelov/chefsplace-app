import { IWishlistContext } from "../../types/Wishlist";
import {
  SET_WISHLIST_ITEMS,
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
  UPDATE_WISHLIST_ITEMS_AVAILABILITY,
} from "./wishlist.action-types";

import {
  setWishlistItems,
  addItemToWishlist,
  removeItemFromWishlist,
  updateWishlistItemsAvalability,
} from "./wishlist.reducer-funcitons";

interface IProps {
  type: string;
  payload: any;
}

export const wishlistReducer = (
  wishlistState: IWishlistContext,
  props: IProps
) => {
  const { type, payload } = props;

  switch (type) {
    case SET_WISHLIST_ITEMS:
      return setWishlistItems(wishlistState, payload.wishlistItems);
    case ADD_ITEM_TO_WISHLIST:
      return addItemToWishlist(wishlistState, payload.wishlistItem);
    case REMOVE_ITEM_FROM_WISHLIST:
      return removeItemFromWishlist(wishlistState, payload.productId);
    case UPDATE_WISHLIST_ITEMS_AVAILABILITY:
      return updateWishlistItemsAvalability(wishlistState, payload.products);
    default:
      return wishlistState;
  }
};
