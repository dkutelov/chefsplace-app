import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useReducer,
} from "react";

import { wishlistRequest } from "./wishlist.service";
import { IWishlistContext } from "../../types/Wishlist";
import { wishlistReducer } from "./whishlist.reducer";

const defaultState: IWishlistContext = {
  wishlistItemIds: [],
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
        .then((results: string[]) => {
          setIsLoading(false);
          dispatch({
            type: "SET_WISHLIST_ITEMS",
            payload: { wishlistItemIds: results },
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
