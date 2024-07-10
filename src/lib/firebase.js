import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-2e22d.firebaseapp.com",
  projectId: "reactchat-2e22d",
  storageBucket: "reactchat-2e22d.appspot.com",
  messagingSenderId: "385513192259",
  appId: "1:385513192259:web:dafdd97139d96f8f4d0df6"
};


const app = initializeApp(firebaseConfig);

//register using auth
export const auth = getAuth();
///create user info using db
export const db = getFirestore();
//upload img during user login
export const storage = getStorage();
