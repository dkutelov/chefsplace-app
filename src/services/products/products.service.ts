import { AvailabilityStatus, Product } from "../../types/Product";
import data from "./mock/mockData.json";

export const productsTransform = (
  results: { [key: string]: any }[]
): Product[] => {
  return results.map<Product>((r: any) => ({
    id: r.id,
    name: r.name,
    images: r.images || [],
    price: r.number,
    reducedPrice: r.reducedPrice,
    shortDescription: r.shortDescription,
    availabilityStatus:
      r.availabilityStatus === 0
        ? AvailabilityStatus.OutOfStock
        : AvailabilityStatus.OnStock,
  }));
};

export const productsRequest = () => {
  return new Promise<{ [key: string]: any }[]>((resolve, reject) => {
    const mock = data;
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
