import { AvailabilityStatus, Product } from "../../types/Product";
import { getProductById } from "./mock/simulatedBackendResponse";

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
    maxQuantity: productData.maxQuantity,
    categoryId: productData.categoryId,
  };
};

export const productRequest = (productId: string) => {
  return new Promise<{ [key: string]: any }>((resolve, reject) => {
    getProductById(productId).then((product) => {
      if (!product) {
        reject("not found");
      }
      resolve(product);
    });
  });
};
