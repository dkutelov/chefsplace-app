import { IWishlistContext } from "../../types/Wishlist";
import {
  SET_WISHLIST_ITEMS,
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
} from "./wishlist.action-types";

import {
  setWishlistItems,
  addItemToWishlist,
  removeItemFromWishlist,
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
  console.log(wishlistState);
  switch (type) {
    case SET_WISHLIST_ITEMS:
      return setWishlistItems(wishlistState, payload.wishlistItems);
    case ADD_ITEM_TO_WISHLIST:
      return addItemToWishlist(wishlistState, payload.wishlistItem);
    case REMOVE_ITEM_FROM_WISHLIST:
      return removeItemFromWishlist(wishlistState, payload.productId);
    default:
      return wishlistState;
  }
};
