import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useReducer,
} from "react";

import { cartRequest, cartTransform } from "./cart.service";
import { ICartContext, CartItem } from "../../types/Cart";
import { cartReducer } from "./cart.reducer";

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

  const initialCart = useContext(CartContext);
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  const retrieveCartItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      cartRequest()
        .then((data: { [key: string]: any }[]) => {
          return cartTransform(data);
        })
        .then((results) => {
          setIsLoading(false);
          dispatch({ type: "SET_CART_ITEMS", payload: { cartItems: results } });
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 500);
  };

  useEffect(() => {
    retrieveCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
