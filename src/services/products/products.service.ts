import { getProducts } from "@infrastructure/firebase/firebaseAppInit";
import { AvailabilityStatus, Product } from "../../types/Product";
import data from "./mock/mockData.json";

export const productsTransform = (
  results: { [key: string]: any }[]
): Product[] => {
  return results.map<Product>((r: any) => ({
    id: r.id,
    name: r.name,
    images: r.images || [],
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
  try {
    const products = await getProducts();
    console.log(products);
    return products;
  } catch (error) {}

  // return new Promise<{ [key: string]: any }[]>((resolve, reject) => {
  //   const mock = data;
  //   if (!mock) {
  //     reject("not found");
  //   }
  //   resolve(mock);
  // });
};
