import { firebaseApp } from "../../infrastructure/firebase/firebaseAppInit";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  NextOrObserver,
} from "firebase/auth";
import { User } from "../../types/User";

const auth = getAuth(firebaseApp);

export const loginRequest = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const userStatusRequest = (cb: NextOrObserver<User>) =>
  onAuthStateChanged(auth, cb);

export const logoutRequest = () => signOut(auth);
