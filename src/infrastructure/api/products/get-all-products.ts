import { ApiConfig } from "@common/types/api";
import { ProductConnection, Product } from "@types/Product";
import { normalizeCategory } from "./normalize";

type ReturnType = {
  products: ProductConnection[];
};

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const data = await config.fetch<ReturnType>({
    url: config.apiUrl + "products",
    query: "",
  });

  const products = data;
  return products;
};

export default getAllProducts;
