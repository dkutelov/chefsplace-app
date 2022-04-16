import { ApiConfig } from "@common/types/api";
import { Product } from "@types/Product";

type ReturnType = {
  product: Product;
};

const getProductById = async (
  config: ApiConfig,
  id: string
): Promise<Product> => {
  const url = config.apiUrl + "products" + `/${id}`;
  const data = await config.fetch<ReturnType>({
    url,
    query: "",
  });

  const product = data;
  return product;
};

export default getProductById;
