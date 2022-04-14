import { ApiConfig } from "@common/types/api";
import { Category, CategoryConnection } from "@types/Product";
import { normalizeCategory } from "./normalize";

type ReturnType = {
  categories: CategoryConnection[];
};

const getAllCategories = async (config: ApiConfig): Promise<Category[]> => {
  const data = await config.fetch<ReturnType>({
    url: config.apiUrl + "categories",
    query: "",
  });

  const categories = data.map((x: CategoryConnection) => {
    return normalizeCategory(x);
  });
  return categories;
};

export default getAllCategories;
