import { string } from "yup";

export interface Profile {
  _id?: string;
  userId?: string;
  deliveryAddress?: DeliveryAddress[];
  invoiceAddress?: InvoiceAddress[];
}

export interface DeliveryAddress {
  _id?: string; // UUID
  name?: string;
  addressName?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  company?: string;
  note?: string;
  postCode?: string;
  city: string;
  area?: string;
  street?: string;
  number?: string;
  block?: string;
  entrance?: string;
  floor?: string;
  apartment?: string;
  isDefault?: boolean;
  deleted?: boolean; //do not delete
  __v?: string;
}

export interface InvoiceAddress {
  _id?: string | null;
  addressId?: string | null;
  addressName?: string;
  companyName: string;
  eik: string;
  vatNumber?: string;
  mol: string;
  phoneNumber: string;
  postCode?: string;
  city: string;
  addressLine: string;
  addressLine2?: string;
  isDefault?: boolean;
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
  apartment?: string;
}

export interface TermSection {
  subtitle?: string;
  contents: string[];
}
