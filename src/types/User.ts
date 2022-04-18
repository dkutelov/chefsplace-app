import { Profile } from "./Profile";

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
  profile: Profile;
}
