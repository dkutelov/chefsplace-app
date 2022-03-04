import React, { useState, createContext, useEffect } from "react";

import { cartRequest, cartTransform } from "./cart.service";
import { ICartContext, CartItem } from "../../types/Cart";

const defaultState: ICartContext = {
  cartItems: [],
  isLoading: false,
};

export const CartContext = createContext<ICartContext>(defaultState);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const retrieveCartItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      cartRequest()
        .then((data: { [key: string]: any }[]) => {
          return cartTransform(data);
        })
        .then((results) => {
          setIsLoading(false);
          setCartItems(results);
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
    <CartContext.Provider
      value={{
        cartItems,
        isLoading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
