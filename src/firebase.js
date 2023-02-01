// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDOzr9ApA8UgnUZe6ZteEDJiyGHrSiFnoY",
  authDomain: "airbnb-clone-d6c97.firebaseapp.com",
  projectId: "airbnb-clone-d6c97",
  storageBucket: "airbnb-clone-d6c97.appspot.com",
  messagingSenderId: "797737443323",
  appId: "1:797737443323:web:108e2e422cc2847b17355e",
  measurementId: "G-FJ8MFGBF42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};