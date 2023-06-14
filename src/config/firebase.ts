// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2UBBx7exyQg9AG2EAjjSjCj7ye-_4SF4",
  authDomain: "social-media-react-916cd.firebaseapp.com",
  projectId: "social-media-react-916cd",
  storageBucket: "social-media-react-916cd.appspot.com",
  messagingSenderId: "719240174411",
  appId: "1:719240174411:web:4df1f1fc4bf6132be226ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);