import React, { useContext } from "react";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { WishlistContext } from "../../../services/wishlist/wishlist.context";
import { NoItemsInWishlist, WishlistItemList } from "./wishlist.styles";
import { Caption } from "react-native-paper";
import { WishlistItemCard } from "../components/wishlist-item/wishlist-item.component";
import { WishlistItem } from "../../../types/Wishlist";

export const WishlistScreen = () => {
  const { wishlistItems, isLoading, error, dispatch } =
    useContext(WishlistContext);
  //TODO: check if products are available and update data to card

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
