// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8WhcEFAXZuisvs-F2y597ek0KDudlGNU",
  authDomain: "pantry-tracker-5f694.firebaseapp.com",
  projectId: "pantry-tracker-5f694",
  storageBucket: "pantry-tracker-5f694.appspot.com",
  messagingSenderId: "985138325051",
  appId: "1:985138325051:web:5082eaf725306af8ab1e1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);