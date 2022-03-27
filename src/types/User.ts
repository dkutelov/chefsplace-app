export interface User {
  [key: string]: any;
}

export interface IUserContext {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error?: string | null;
  dispatch: React.Dispatch<any>;
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
}
