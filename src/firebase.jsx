// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdMllNmpgxR-9CPR73M0KtDd24Zi5-Pis",
  authDomain: "pruebamedidor-2023.firebaseapp.com",
  projectId: "pruebamedidor-2023",
  storageBucket: "pruebamedidor-2023.appspot.com",
  messagingSenderId: "629582525221",
  appId: "1:629582525221:web:7cb96e2679469490b420cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)