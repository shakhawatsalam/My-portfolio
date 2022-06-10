// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk-6j3k9nLklpSEQ2cRkdWyM4yBFAlXXQ",
    authDomain: "my-portfolio-8ff5f.firebaseapp.com",
    projectId: "my-portfolio-8ff5f",
    storageBucket: "my-portfolio-8ff5f.appspot.com",
    messagingSenderId: "425330938612",
    appId: "1:425330938612:web:f076a82d7d09f1971384a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;