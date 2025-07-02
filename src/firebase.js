// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1cViBcFypmZN5zCONr2NXKecsVUvan-E",
  authDomain: "womenpro-a78bb.firebaseapp.com",
  projectId: "womenpro-a78bb",
  storageBucket: "womenpro-a78bb.firebasestorage.app",
  messagingSenderId: "805692475705",
  appId: "1:805692475705:web:4ed2bbb4ba3b84720300e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);