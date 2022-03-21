import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useReducer,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { wishlistTransform } from "./wishlist.service";
import { IWishlistContext, WishlistItem } from "../../types/Wishlist";
import { wishlistReducer } from "./whishlist.reducer";

const defaultState: IWishlistContext = {
  wishlistItems: [],
  dispatch: () => {},
};

export const WishlistContext = createContext<IWishlistContext>(defaultState);

export const WishlistContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [error, setError] = useState(undefined);
  const initialWishlist = useContext(WishlistContext);
  const [state, dispatch] = useReducer(wishlistReducer, initialWishlist);

  const saveFavourites = async (value: WishlistItem[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const rawWishlistData = await AsyncStorage.getItem("@favourites");

      if (rawWishlistData !== null) {
        const wishlistItemsWithoutAvailability = JSON.parse(rawWishlistData);
        const wishlistItems = wishlistTransform(
          wishlistItemsWithoutAvailability
        );
        dispatch({
          type: "SET_WISHLIST_ITEMS",
          payload: { wishlistItems },
        });
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(state.wishlistItems);
  }, [state.wishlistItems]);

  return (
    <WishlistContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};
