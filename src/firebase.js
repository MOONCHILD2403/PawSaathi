import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEMNJIlFVUUZp9GkumrarTaSmKHEcCzbY",
  authDomain: "auth-ps-289f6.firebaseapp.com",
  projectId: "auth-ps-289f6",
  storageBucket: "auth-ps-289f6.appspot.com",
  messagingSenderId: "153653751627",
  appId: "1:153653751627:web:3cde2feda48db2bb5442ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;