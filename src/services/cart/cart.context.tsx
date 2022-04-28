import React, { useState, createContext, useContext, useReducer } from "react";

import { ICartContext } from "../../types/Cart";
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

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
