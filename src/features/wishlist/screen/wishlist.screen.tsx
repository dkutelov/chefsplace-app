import React, { useContext, useEffect } from "react";
import { Caption } from "react-native-paper";

// Types
import { WishlistItem } from "../../../types/Wishlist";

// Context
import { WishlistContext } from "@services/wishlist/wishlist.context";
import { ProductsContext } from "@services/products/products.context";
import { UPDATE_WISHLIST_ITEMS_AVAILABILITY } from "@services/wishlist/wishlist.action-types";

// Components
import { SafeArea } from "@components";
import { WishlistItemCard } from "../components/wishlist-item/wishlist-item.component";

// Styles
import { NoItemsInWishlist, WishlistItemList } from "./wishlist.styles";

export const WishlistScreen = () => {
  const { wishlistItems, error, dispatch } = useContext(WishlistContext);
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    dispatch({
      type: UPDATE_WISHLIST_ITEMS_AVAILABILITY,
      payload: { products },
    });
  }, [products]);

  return (
    <SafeArea>
      {wishlistItems.length === 0 ? (
        <NoItemsInWishlist>
          <Caption>Нямате желани продукти!</Caption>
        </NoItemsInWishlist>
      ) : (
        <WishlistItemList
          data={wishlistItems}
          renderItem={(item: { item: WishlistItem }) => (
            <WishlistItemCard wishlistItem={item.item} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeArea>
  );
};
