// Import the functions you need from the SDKs you need
import { getAuth }from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB0pzosLeTw49F2K0seoWuZ52GIwdOHIVc",
  authDomain: "ecommerce-9d336.firebaseapp.com",
  projectId: "ecommerce-9d336",
  storageBucket: "ecommerce-9d336.appspot.com",
  messagingSenderId: "591197097819",
  appId: "1:591197097819:web:664bd8d4a6c8e1f01e947e",
  measurementId: "G-L0V5XD22JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();


