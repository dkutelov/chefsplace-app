import { firebaseApp } from "../../infrastructure/firebase/firebaseAppInit";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  NextOrObserver,
  sendPasswordResetEmail,
  updatePassword,
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

export const sendResetPasswordEmail = async (email: string) =>
  await sendPasswordResetEmail(auth, email);

export const changePassword = async (newPassword: string) => {
  const user = auth.currentUser;
  return await updatePassword(user, newPassword);
};
