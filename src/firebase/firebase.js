import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWFJ1LC_VC1Pvl4JnOGBqmWYrq4v0m_4w",
  authDomain: "tienda-samuel.firebaseapp.com",
  projectId: "tienda-samuel",
  storageBucket: "tienda-samuel.appspot.com",
  messagingSenderId: "533150048529",
  appId: "1:533150048529:web:ff8e293ed468b1663cecb0"
};

initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig)

const db = getFirestore();
const auth = getAuth();

export  { db, auth };
