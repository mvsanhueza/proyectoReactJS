// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc9Y_W6vY6LdfPDH3rdYVJMjDowDJ3DnI",
  authDomain: "coder-proyecto-reactjs.firebaseapp.com",
  projectId: "coder-proyecto-reactjs",
  storageBucket: "coder-proyecto-reactjs.appspot.com",
  messagingSenderId: "1011326783437",
  appId: "1:1011326783437:web:0a9d079fcdd39ff901be84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;