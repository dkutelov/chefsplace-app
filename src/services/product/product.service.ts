import { AvailabilityStatus, Product } from "../../types/Product";
import data from "./mock/mockData.json";

export const productTransform = (productData: {
  [key: string]: any;
}): Product => {
  return {
    id: productData.id,
    name: productData.name,
    images: productData.images || [],
    price: productData.price,
    reducedPrice: productData.reducedPrice,
    shortDescription: productData.shortDescription,
    description: productData.description,
    availabilityStatus:
      productData.availabilityStatus === 0
        ? AvailabilityStatus.OutOfStock
        : AvailabilityStatus.OnStock,
  };
};

export const productRequest = () => {
  return new Promise<{ [key: string]: any }>((resolve, reject) => {
    const mock = data;
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
