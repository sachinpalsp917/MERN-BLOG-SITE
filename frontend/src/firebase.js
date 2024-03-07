// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blogsite.firebaseapp.com",
  projectId: "mern-blogsite",
  storageBucket: "mern-blogsite.appspot.com",
  messagingSenderId: "681263210129",
  appId: "1:681263210129:web:6d10013e42da9de661a930",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
