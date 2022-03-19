import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useReducer,
} from "react";

import { wishlistRequest, wishlistTransform } from "./wishlist.service";
import { IWishlistContext, WishlistItem } from "../../types/Wishlist";
import { wishlistReducer } from "./whishlist.reducer";

const defaultState: IWishlistContext = {
  wishlistItems: [],
  isLoading: false,
  dispatch: () => {},
};

export const WishlistContext = createContext<IWishlistContext>(defaultState);

export const WishlistContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const initialWishlist = useContext(WishlistContext);
  const [state, dispatch] = useReducer(wishlistReducer, initialWishlist);

  const retrieveWishlistItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      wishlistRequest()
        .then((data: { [key: string]: any }[]) => {
          return wishlistTransform(data);
        })
        .then((results: WishlistItem[]) => {
          setIsLoading(false);
          dispatch({
            type: "SET_WISHLIST_ITEMS",
            payload: { wishlistItems: results },
          });
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 500);
  };

  useEffect(() => {
    retrieveWishlistItems();
  }, []);

  return (
    <WishlistContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};
