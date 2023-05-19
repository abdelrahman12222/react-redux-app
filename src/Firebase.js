import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCq7PDe7UAdB9cA2I0xqO8eqjl3ZjLfsOQ",
  authDomain: "ecommerce-bfa93.firebaseapp.com",
  projectId: "ecommerce-bfa93",
  storageBucket: "ecommerce-bfa93.appspot.com",
  messagingSenderId: "73042356627",
  appId: "1:73042356627:web:0f5414b52e51f8d741e066",
  measurementId: "G-K1RDKH31SP",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;