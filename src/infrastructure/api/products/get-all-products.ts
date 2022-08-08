import { ApiConfig } from "@common/types/api";
import { ProductConnection, ProductList } from "@types/Product";

type ReturnType = {
  products: ProductConnection[];
};

const getAllProducts = async (
  config: ApiConfig,
  filter: string = ""
): Promise<ProductList[]> => {
  try {
    const products = await config.fetch<ReturnType>({
      url: `${config.apiUrl}products${filter ? "/" + filter : ""}`,
      query: "",
    });
    return products;
  } catch (error) {
    throw new Error("Server Error!!");
  }
};

export default getAllProducts;
