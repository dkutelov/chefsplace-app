import React, { useContext, useEffect } from "react";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { WishlistContext } from "../../../services/wishlist/wishlist.context";
import { NoItemsInWishlist, WishlistItemList } from "./wishlist.styles";
import { Caption } from "react-native-paper";
import { WishlistItemCard } from "../components/wishlist-item/wishlist-item.component";
import { WishlistItem } from "../../../types/Wishlist";
import { ProductsContext } from "../../../services/products/products.context";
import { UPDATE_WISHLIST_ITEMS_AVAILABILITY } from "../../../services/wishlist/wishlist.action-types";

export const WishlistScreen = () => {
  const { wishlistItems, isLoading, error, dispatch } =
    useContext(WishlistContext);
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
