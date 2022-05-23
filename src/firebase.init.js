// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRWBnk1Pr43IjdG8GJFXZjs9PaPZBs2ic",
  authDomain: "household-industrial.firebaseapp.com",
  projectId: "household-industrial",
  storageBucket: "household-industrial.appspot.com",
  messagingSenderId: "16633154007",
  appId: "1:16633154007:web:0ba835c98ce0662cbae392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;