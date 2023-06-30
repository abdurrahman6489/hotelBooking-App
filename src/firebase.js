// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSzzu-0_Ph5k-y7xKPoqyo2CBwdf4bTL4",
  authDomain: "bookstay-c4bfe.firebaseapp.com",
  projectId: "bookstay-c4bfe",
  storageBucket: "bookstay-c4bfe.appspot.com",
  messagingSenderId: "542445831621",
  appId: "1:542445831621:web:f1df50d714ff28b38ef7ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
