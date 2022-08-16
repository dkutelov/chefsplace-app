import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
} from "firebase/firestore/lite";
import { firebaseConfig } from "./firebaseConfig";

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(firebaseApp);

