import { CartItem, ICartContext } from "../../types/Cart";

export const updateCartItems = (
  cartState: ICartContext,
  cartItems: CartItem[]
): ICartContext => ({
  ...cartState,
  cartItems,
});

export const updateCartItemQuantity = (
  cartState: ICartContext,
  cartItem: CartItem,
  newQuantity: number
): ICartContext => {
  const updatedCartItems = cartState.cartItems.map((x) => {
    if (x.id === cartItem.id) {
      x.quantity = newQuantity;
      if (x.maxQuantity && x.quantity > x.maxQuantity) {
        x.quantity = x.maxQuantity;
      }
    }
    return x;
  });

  return updateCartItems(cartState, updatedCartItems);
};

export const addItemToCart = (
  cartState: ICartContext,
  cartItem: CartItem
): ICartContext => {
  const items = cartState.cartItems;
  const itemExists = items.find((x) => x.id === cartItem.id);

  if (!itemExists) {
    const updatedCartItems = [...cartState.cartItems, cartItem];
    return updateCartItems(cartState, updatedCartItems);
  }

  cartItem.quantity += itemExists.quantity;
  return updateCartItemQuantity(cartState, cartItem, cartItem.quantity);
};

export const removeItemFromCart = (
  cartState: ICartContext,
  cartItem: CartItem
): ICartContext => {
  const updatedCartItems = cartState.cartItems.filter(
    (x) => x.id !== cartItem.id
  );
  return updateCartItems(cartState, updatedCartItems);
};
