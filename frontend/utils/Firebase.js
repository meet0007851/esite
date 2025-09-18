import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyCSn249YKxQcvPqtIN-RE3aDhYQEMY5fcE",
  authDomain: "fir-fec1e.firebaseapp.com",
  projectId: "fir-fec1e",
  storageBucket: "fir-fec1e.appspot.com",
  messagingSenderId: "151607444434",
  appId: "1:151607444434:web:e43f0772ab707a1ecfbe0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {auth,provider}