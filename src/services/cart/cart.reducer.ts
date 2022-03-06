import { ICartContext } from "../../types/Cart";
import {
  SET_CART_ITEMS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_QUANTITY,
} from "./cart.action-types";

import {
  updateCartItemQuantity,
  updateCartItems,
  addItemToCart,
  removeItemFromCart,
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
    case ADD_ITEM_TO_CART:
      return addItemToCart(cartState, payload.item);
    case REMOVE_ITEM_FROM_CART:
      return removeItemFromCart(cartState, payload.cartItem);
    case UPDATE_ITEM_QUANTITY:
      const { cartItem, newQuantity } = payload;
      return updateCartItemQuantity(cartState, cartItem, newQuantity);
    default:
      return cartState;
  }
};
