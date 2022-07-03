import { ICartContext } from "../../types/Cart";
import {
  SET_CART_ITEMS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_QUANTITY,
  UPDATE_CART_ITEMS_ON_LOAD,
  SET_CART_ITEMS_FROM_LOCAL,
  EMPTY_CART,
} from "./cart.action-types";

import {
  updateCartItemQuantity,
  updateCartItems,
  addItemToCart,
  removeItemFromCart,
  updateCartItemsOnLoad,
  setCartItems,
  removeAllCartItems,
} from "./cart.reducer-functions";

interface IProps {
  type: string;
  payload: any;
}

export const cartReducer = (cartState: ICartContext, props: IProps) => {
  const { type, payload } = props;
  switch (type) {
    case SET_CART_ITEMS:
      return updateCartItems(cartState, payload.cartItems);
    case SET_CART_ITEMS_FROM_LOCAL:
      return setCartItems(cartState, payload);
    case UPDATE_CART_ITEMS_ON_LOAD:
      return updateCartItemsOnLoad(cartState, payload);
    case ADD_ITEM_TO_CART:
      return addItemToCart(cartState, payload);
    case REMOVE_ITEM_FROM_CART:
      return removeItemFromCart(cartState, payload.cartItemId);
    case UPDATE_ITEM_QUANTITY:
      const { cartItem, newQuantity } = payload;
      return updateCartItemQuantity(cartState, cartItem, newQuantity);
    case EMPTY_CART:
      return removeAllCartItems(cartState);
    default:
      return cartState;
  }
};
