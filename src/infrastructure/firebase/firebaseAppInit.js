import { initializeApp, getApps, getApp, getAnalytics } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseConfig } from "./firebaseConfig";

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(firebaseApp);

// export async function getProducts() {
//   const q = query(collection(db, "products"));
//   const querySnapshot = await getDocs(q);
//   const productsList = querySnapshot.docs.map((doc) => {
//     return { id: doc.id, ...doc.data() };
//   });
//   return productsList;
// }

//const analytics = getAnalytics(firebaseApp);
