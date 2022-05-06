import { AuthenticationContext } from "@services/authentication";
import React, {
  useState,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CartItem, ICartContext } from "../../types/Cart";
import { cartReducer } from "./cart.reducer";
import { ProductsContext } from "@services/products";

const defaultState: ICartContext = {
  cartItems: [],
  isLoading: false,
  dispatch: () => {},
};

export const CartContext = createContext<ICartContext>(defaultState);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { user } = useContext(AuthenticationContext);
  const initialCart = useContext(CartContext);
  const [state, dispatch] = useReducer(cartReducer, initialCart);
  const { products } = useContext(ProductsContext);

  //TODO: if no logged user -> keep cart items in async storage

  //TODO: if not logged user creates profile, copy cart items from async to DB

  //TODO: if not logged user logs if cart items in async storage -> delete all from DB and copy from async to db

  //TODO: if user is logged in, sync db, profile
  // dispatch({
  //   type: "UPDATE_CART_ITEMS_ON_LOAD",
  //   payload: { cartItems: profile.cart, products },
  // });

  const saveCartItems = async (value: CartItem[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@cart", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadCartItems = async () => {
    try {
      const rawCartItemsData = await AsyncStorage.getItem("@cart");

      if (rawCartItemsData !== null) {
        const cartItemsFromMemory = JSON.parse(rawCartItemsData);
        console.log({ cartItemsFromMemory });
        dispatch({
          type: "UPDATE_CART_ITEMS_ON_LOAD",
          payload: { cartItemsFromMemory, products },
        });
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  useEffect(() => {
    if (!user) {
      loadCartItems();
    }
  }, []);

  useEffect(() => {
    if (!user) {
      saveCartItems(state.cartItems);
    }
  }, [state.cartItems]);
  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
