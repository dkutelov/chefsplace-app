import getAllProducts from "@infrastructure/api/products/get-all-products";
import { AvailabilityStatus, Product } from "../../types/Product";
import data from "./mock/mockData.json";
import { getConfig } from "@infrastructure/api/config";

export const productsTransform = (
  results: { [key: string]: any }[]
): Product[] => {
  return results.map<Product>((r: any) => ({
    id: r.id,
    name: r.name,
    mainImage: r.mainImage,
    price: r.price,
    reducedPrice: r.reducedPrice,
    availabilityStatus:
      r.maxQuantity === 0
        ? AvailabilityStatus.OutOfStock
        : AvailabilityStatus.OnStock,
    shortDescription: r.shortDescription,
    maxQuantity: r.maxQuantity,
    categoryId: r.categoryId,
  }));
};

export const productsRequest = async () => {
  const config = getConfig();
  try {
    const products = data;
    const fetchedProducts = await getAllProducts(config);

    // const products = await getProducts();
    // console.log(products);
    return fetchedProducts;
  } catch (error) {}

  // return new Promise<{ [key: string]: any }[]>((resolve, reject) => {
  //   const mock = data;
  //   if (!mock) {
  //     reject("not found");
  //   }
  //   resolve(mock);
  // });
};
