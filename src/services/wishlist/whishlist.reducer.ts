import { IWishlistContext } from "../../types/Wishlist";
import {
  SET_WISHLIST_ITEMS,
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
} from "./wishlist.action-types";

import { setWishlistItemIds } from "./wishlist.reducer-funcitons";

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
      return setWishlistItemIds(wishlistState, payload.wishlistItemIds);
    default:
      return wishlistState;
  }
};
