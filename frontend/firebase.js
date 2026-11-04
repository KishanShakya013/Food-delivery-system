// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "food-delivery-76713.firebaseapp.com",
  projectId: "food-delivery-76713",
  storageBucket: "food-delivery-76713.firebasestorage.app",
  messagingSenderId: "419215898885",
  appId: "1:419215898885:web:5190b3f3f0b0f5aeaddf6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}