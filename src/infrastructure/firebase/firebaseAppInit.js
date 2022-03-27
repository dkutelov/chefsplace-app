import { initializeApp, getApps, getApp, getAnalytics } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

//const analytics = getAnalytics(firebaseApp);
