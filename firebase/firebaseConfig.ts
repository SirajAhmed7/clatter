// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUEHtenTSYpXGwpokK_ytmROfTjKoqDVE",
  authDomain: "clatter-c848b.firebaseapp.com",
  projectId: "clatter-c848b",
  storageBucket: "clatter-c848b.appspot.com",
  messagingSenderId: "161383170253",
  appId: "1:161383170253:web:7ebbf8024304205e1e6984",
  measurementId: "G-0WVKVC8FHJ",
};

// Initialize Firebase
const firebasApp = initializeApp(firebaseConfig);
export default firebasApp;
