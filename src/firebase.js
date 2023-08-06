import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
  apiKey: "AIzaSyC3fiN0-0kAzCLStaPj_KZ13OnOdXS9T-Y",
  authDomain: "fir-5a9f8.firebaseapp.com",
  projectId: "fir-5a9f8",
  storageBucket: "fir-5a9f8.appspot.com",
  messagingSenderId: "785435832885",
  appId: "1:785435832885:web:0b4da682a5eadadb47b77c"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
