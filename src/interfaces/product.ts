export enum AvailabilityStatus {
  OnStock = 1,
  OutOfStock = 0,
}

export interface Product {
  name: String;
  images: String[];
  price: number;
  reducedPrice?: number;
  shortDescription: String;
  availabilityStatus: AvailabilityStatus;
}
