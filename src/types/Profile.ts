export interface Profile {
  userId: string;
  deliveryAddresses: DeliveryAddress[];
  invoiceAddresses: InvoiceAddress[];
}

export interface DeliveryAddress {
  addressId: string; // UUID
  addressName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  company?: string;
  note?: string;
  address: Address;
  isDefault: boolean;
  deleted: boolean; //do not delete
}

export interface InvoiceAddress {
  addressId: string; // UUID
  addressName: string;
  companyName: string;
  eik: string;
  vatNumber?: string;
  mol: string;
  address: Address;
  note?: string;
  isDefault: boolean;
  deleted: boolean; //do not delete
}

export interface Address {
  postCode?: string;
  city: string;
  area?: string;
  street?: string;
  number?: string;
  block?: string;
  entrance?: string;
  floor?: string;
  apartment?: "16";
}
