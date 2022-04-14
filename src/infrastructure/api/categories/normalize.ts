import { Category, CategoryConnection } from "@types/Product";

export const normalizeCategory = (
  categoryData: CategoryConnection
): Category => {
  const category: Category = {
    id: categoryData._id,
    name: categoryData.name,
    imageUrl: categoryData.imageUrl,
  };

  return category;
};
