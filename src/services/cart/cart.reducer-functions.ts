import { CartItem, ICartContext } from "../../types/Cart";
import { ProductList } from "../../types/Product";

//Update state
export const updateCartItems = (
  cartState: ICartContext,
  cartItems: CartItem[]
): ICartContext => ({
  ...cartState,
  cartItems,
});

export const setCartItems = (
  cartState: ICartContext,
  payload: any
): ICartContext => {
  const { cartItems } = payload;
  return {
    ...cartState,
    cartItems,
  };
};

export const updateCartItemsOnLoad = (
  cartState: ICartContext,
  payload: any
): ICartContext => {
  const { cartItemsFromMemory, products } = payload;

  const cartItems = cartItemsFromMemory;
  let updatedCartItems: CartItem[] = [];
  //Remove currently non available products
  if (cartItems?.length > 0) {
    cartItems.forEach((cartItem: CartItem) => {
      const product = products.find(
        (p: ProductList) => p.id === cartItem.productId
      );

      if (product) {
        updatedCartItems = [
          ...updatedCartItems,
          {
            productId: product._id,
            name: product.name,
            image: product.mainImage,
            price: product.price,
            maxQuantity: product.maxQuantity,
            quantity: cartItem.quantity,
          },
        ];
      }
    });
  }

  return {
    ...cartState,
    cartItems: updatedCartItems,
  };
};

export const updateCartItemQuantity = (
  cartState: ICartContext,
  cartItem: CartItem,
  newQuantity: number
): ICartContext => {
  const updatedCartItems = cartState.cartItems.map((x) => {
    if (x.productId === cartItem.productId) {
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
  const itemExists = items.find((x) => x.productId === cartItem.productId);

  if (!itemExists) {
    const updatedCartItems = [...cartState.cartItems, cartItem];
    return updateCartItems(cartState, updatedCartItems);
  }

  cartItem.quantity += itemExists.quantity;
  return updateCartItemQuantity(cartState, cartItem, cartItem.quantity);
};

export const removeItemFromCart = (
  cartState: ICartContext,
  cartItemId: string
): ICartContext => {
  const updatedCartItems = cartState.cartItems.filter(
    (x) => x.productId !== cartItemId
  );
  return updateCartItems(cartState, updatedCartItems);
};
