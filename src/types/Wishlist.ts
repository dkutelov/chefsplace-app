export interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
  available: boolean;
}

export interface IWishlistContext {
  wishlistItems: WishlistItem[];
  isLoading: boolean;
  error?: string;
  dispatch: React.Dispatch<any>;
}
