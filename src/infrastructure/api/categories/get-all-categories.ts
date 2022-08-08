import { ApiConfig } from "@common/types/api";
import { Category, CategoryConnection } from "@types/Product";
import { normalizeCategory } from "./normalize";

type ReturnType = {
  categories: CategoryConnection[];
};

const getAllCategories = async (config: ApiConfig): Promise<Category[]> => {
  try {
    const data = await config.fetch<ReturnType>({
      url: config.apiUrl + "categories",
      query: "",
    });

    const categories = data.map((x: CategoryConnection) => {
      return normalizeCategory(x);
    });
    return categories;
  } catch (error) {
    throw new Error("Server Error");
  }
};

export default getAllCategories;
