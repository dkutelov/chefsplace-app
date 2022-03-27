import React, { useState, createContext } from "react";
import { IUserContext, User } from "../../types/User";

import {
  loginRequest,
  registerRequest,
  userStatusRequest,
  logoutRequest,
} from "./authentication.service";

const defaultState: IUserContext = {
  isAuthenticated: false,
  user: null,
  error: null,
  isLoading: false,
  onLogin: () => {},
  onRegister: () => {},
  onLogout: () => {},
};

export const AuthenticationContext = createContext<IUserContext>(defaultState);

export const AuthenticationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  userStatusRequest((usr) => {
    if (usr) {
      setUser(usr);
    }
  });

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
        setError(e.toString());
      });
  };

  const onRegister = (
    email: string,
    password: string,
    repeatedPassword: string
  ) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match!");
      return;
    }

    setIsLoading(true);
    registerRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    logoutRequest().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
