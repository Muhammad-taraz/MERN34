// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhU2MS10YRe9htIJy8XTpEIGp11cdclSk",
  authDomain: "mern-test-1-d1904.firebaseapp.com",
  projectId: "mern-test-1-d1904",
  storageBucket: "mern-test-1-d1904.appspot.com",
  messagingSenderId: "85876551932",
  appId: "1:85876551932:web:0dcd614911f3caaef8e779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();