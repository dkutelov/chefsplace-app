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
import { translatedError } from "@infrastructure/utils/firebase/translateFirebaseError";

const defaultState: IUserContext = {
  isAuthenticated: false,
  user: null,
  error: null,
  isLoading: false,
  onLogin: () => {},
  onRegister: () => {},
  onLogout: () => {},
  profile: {},
  fetchProfileById: () => {},
};

export const AuthenticationContext = createContext<IUserContext>(defaultState);

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

  userStatusRequest(async (usr) => {
    if (usr) {
      setUser(usr?.uid);
    }
  });

  useEffect(() => {
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
    setError(null);
    try {
      const u = await loginRequest(email, password);
      const userProfile = await getProfileByUid(config, u.user.uid);
      setProfile(userProfile.profile);
      setIsLoading(false);
      setError(null);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
      const errorText = e.toString();
      const translatedErr = translatedError(errorText);
      setError(translatedErr || errorText);
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

    if (password.length < 6 || repeatedPassword.length < 6) {
      setError("Паролата трябва да е дълга поне 6 символа!");
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
      const translatedErr = translatedError(errorText);
      setError(translatedErr || errorText);
    }
  };

  const onLogout = () => {
    logoutRequest().then(() => {
      setUser(null);
      setProfile(null);
      setError(null);
    });
  };

  const clearError = () => {
    setError(null);
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
        clearError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
