import createProfile from "@infrastructure/api/users/create-profile";
import React, { useState, createContext, useEffect, useContext } from "react";
import { IUserContext, User } from "../../types/User";

import {
  loginRequest,
  registerRequest,
  userStatusRequest,
  logoutRequest,
} from "./authentication.service";

import { getConfig } from "@infrastructure/api/config";
import { Profile } from "@types/Profile";
import {
  getProfileByUid,
  getProfileById,
} from "@infrastructure/api/users/get-profile";
import { ProductsContext } from "@services/products";
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
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const config = getConfig();

  const { products } = useContext(ProductsContext);

  userStatusRequest(async (usr) => {
    if (usr) {
      setUser(usr?.uid);
    }
  });

  useEffect(() => {
    //console.log(user);
    (async () => {
      if (user) {
        const { profile } = await getProfileByUid(config, user);
        console.log({ profile });

        setProfile(profile);
      }
    })();
  }, [user]);

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const u = await loginRequest(email, password);
      const userProfile = await getProfileByUid(config, u.user.uid);
      setProfile(userProfile.profile);
      setIsLoading(false);
      setError(null);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
      setError(e.toString());
    }
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
      const profile = await createProfile(config, u.user.uid, u.user.email);
      setProfile(profile);
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
      setProfile(null);
      setError(null);
    });
  };

  async function fetchProfileById() {
    if (profile && profile._id) {
      const userId: string = profile._id;
      setProfile(null);
      const userProfile = await getProfileById(config, userId);
      console.log({ userProfile });

      setProfile(userProfile.profile);
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        profile,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        fetchProfileById,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
