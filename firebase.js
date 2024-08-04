// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIlS9X6lvMe1IVr0jXaZVp7md_aU8qaoQ",
  authDomain: "pantryapp-67cf0.firebaseapp.com",
  projectId: "pantryapp-67cf0",
  storageBucket: "pantryapp-67cf0.appspot.com",
  messagingSenderId: "778048268679",
  appId: "1:778048268679:web:2f9ab5140569f564d78b22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}