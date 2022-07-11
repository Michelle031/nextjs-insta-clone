// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc5pOkzqbuLnHKzS-mvvxLnCsznb2k7qA",
  authDomain: "insta-clone-691a6.firebaseapp.com",
  projectId: "insta-clone-691a6",
  storageBucket: "insta-clone-691a6.appspot.com",
  messagingSenderId: "171773975102",
  appId: "1:171773975102:web:fc282ee24923262002cf6f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };