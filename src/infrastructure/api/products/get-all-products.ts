import { ApiConfig } from "@common/types/api";
import { ProductConnection, ProductList } from "@types/Product";

type ReturnType = {
  products: ProductConnection[];
};

const getAllProducts = async (config: ApiConfig): Promise<ProductList[]> => {
  const data = await config.fetch<ReturnType>({
    url: config.apiUrl + "products",
    query: "",
  });

  const products = data;
  return products;
};

export default getAllProducts;
