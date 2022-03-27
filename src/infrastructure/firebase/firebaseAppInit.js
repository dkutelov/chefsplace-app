import { initializeApp, getApps, getApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const analytics = getAnalytics(firebaseApp);
