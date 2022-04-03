export interface DeliveryAddress {
  addressName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  company?: string;
  note?: string;
  address: Address;
  isDefault: boolean;
}

export interface InvoiceAddress {
  addressName: string;
  companyName: string;
  eik: string;
  vatNumber?: string;
  mol: string;
  address: Address;
  note?: string;
  isDefault: boolean;
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

export interface User {
  [key: string]: any;
}

export interface IUserContext {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error?: string | null;
  onLogin: (email: string, password: string) => void;
  onRegister: (
    email: string,
    password: string,
    repeatedPassword: string
  ) => void;
  onLogout: () => void;
}
