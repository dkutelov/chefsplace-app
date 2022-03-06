import { ICartContext } from "../../types/Cart";

interface IProps {
  type: string;
  payload: any;
}

export const cartReducer = (cartState: ICartContext, props: IProps) => {
  const { type, payload } = props;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...cartState,
        cartItems: payload.cartItems,
      };
    case "ADD_ITEM_TO_CART":
      return {
        ...cartState,
        cartItems: [...cartState.cartItems, payload.item],
      };
    default:
      return cartState;
  }
};
