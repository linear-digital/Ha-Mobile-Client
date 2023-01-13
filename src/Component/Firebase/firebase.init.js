import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAjkoD9GvhoeG5YmORZGJqDfn3uT3kTwf4",

  authDomain: "assignment-12-6aec6.firebaseapp.com",

  projectId: "assignment-12-6aec6",

  storageBucket: "assignment-12-6aec6.appspot.com",

  messagingSenderId: "480970947058",

  appId: "1:480970947058:web:fa1bfc87a16393ca2c536b"

};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth