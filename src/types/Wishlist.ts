export interface IWishlistContext {
  wishlistItemIds: string[];
  isLoading: boolean;
  error?: string;
  dispatch: React.Dispatch<any>;
}
