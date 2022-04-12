import { initializeApp, getApps, getApp, getAnalytics } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { firebaseConfig } from "./firebaseConfig";

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(firebaseApp);

export async function getProducts() {
  const productsCol = collection(db, "products");
  const productsSnapshot = await getDocs(productsCol);
  const productsList = productsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return productsList;
}

//const analytics = getAnalytics(firebaseApp);
