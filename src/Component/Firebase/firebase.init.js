 
import { getAuth } from "firebase/auth";

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByBVBHu_L8Wdb2qUyXOl_PyBy4h1T3K84",
  authDomain: "mobile-accessories-8e68f.firebaseapp.com",
  projectId: "mobile-accessories-8e68f",
  storageBucket: "mobile-accessories-8e68f.appspot.com",
  messagingSenderId: "154765780533",
  appId: "1:154765780533:web:db56d91d1777c6515cb37c",
  measurementId: "G-SWLVDGFVLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth