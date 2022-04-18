import createProfile from "@infrastructure/api/users/create-profile";
import React, { useState, createContext } from "react";
import { IUserContext, User } from "../../types/User";

import {
  loginRequest,
  registerRequest,
  userStatusRequest,
  logoutRequest,
} from "./authentication.service";

import { getConfig } from "@infrastructure/api/config";
const defaultState: IUserContext = {
  isAuthenticated: false,
  user: null,
  error: null,
  isLoading: false,
  onLogin: () => {},
  onRegister: () => {},
  onLogout: () => {},
  profile: {},
};

export const AuthenticationContext = createContext<IUserContext>(defaultState);

//TODO: Clear errors on screen leave or tab change
//TODO: Translate firebase errors, move to constants
const translatedError: { [key: string]: string } = {
  "FirebaseError: Firebase: Error (auth/email-already-in-use).":
    "Имейлът вече съществува. Пробвайте с друг имейл.",
};

export const AuthenticationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const config = getConfig();
  userStatusRequest((usr) => {
    if (usr) {
      //TODO: get profile
      setUser(usr);
    }
  });

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
        setError(e.toString());
      });
  };

  const onRegister = async (
    email: string,
    password: string,
    repeatedPassword: string
  ) => {
    if (password !== repeatedPassword) {
      setError("Паролите не съвпадат!");
      return;
    }

    setIsLoading(true);

    try {
      const u = await registerRequest(email, password);
      setUser(u);
      const profile = await createProfile(config, u.user.uid, u.user.email);
      //TODO: Add profile to context
      setIsLoading(false);
      setError(null);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
      const errorText = e.toString();
      setError(translatedError[errorText]);
    }
  };

  const onLogout = () => {
    logoutRequest().then(() => {
      setUser(null);
      setError(null);
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
