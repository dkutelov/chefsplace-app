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
    if (x.item.id === cartItem.item.id) {
      x.quantity = newQuantity;
      if (x.item.maxQuantity && x.quantity > x.item.maxQuantity) {
        x.quantity = x.item.maxQuantity;
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
  const itemExists = items.find((x) => x.item.id === cartItem.item.id);

  if (!itemExists) {
    const updatedCartItems = [...cartState.cartItems, cartItem];
    return updateCartItems(cartState, updatedCartItems);
  }
  return updateCartItemQuantity(cartState, cartItem, cartItem.quantity);
};

export const removeItemFromCart = (
  cartState: ICartContext,
  cartItem: CartItem
): ICartContext => {
  const updatedCartItems = cartState.cartItems.filter(
    (x) => x.item.id !== cartItem.item.id
  );
  return updateCartItems(cartState, updatedCartItems);
};
