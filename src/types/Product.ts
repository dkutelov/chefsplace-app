export enum AvailabilityStatus {
  OnStock = 1,
  OutOfStock = 0,
}

export interface Product {
  name: string;
  images: string[];
  price: number;
  reducedPrice?: number;
  shortDescription: string;
  availabilityStatus: AvailabilityStatus;
}
