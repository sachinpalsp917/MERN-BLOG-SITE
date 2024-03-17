// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "brctc-8f98d.firebaseapp.com",
  projectId: "brctc-8f98d",
  storageBucket: "brctc-8f98d.appspot.com",
  messagingSenderId: "39347238215",
  appId: "1:39347238215:web:20ae3b0187c7a8356b4862",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
